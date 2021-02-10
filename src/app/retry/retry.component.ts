import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { delay, retry, retryWhen, scan } from 'rxjs/operators';

@Component({
  selector: 'app-retry',
  templateUrl: './retry.component.html',
  styleUrls: ['./retry.component.scss']
})
export class RetryComponent implements OnInit {
  person;
  fetching: boolean = false;
  status: string="No Data";
  constructor(private _http: HttpClient) { }

  ngOnInit(): void {

  }

  fetchDetails() {
    this.fetching = true;

    //Example 01 ->retry
    // this._http.get('https://global-1bb0f.firebaseio.com/user.json').
    // pipe(
    //   retry(5)
    //   ).subscribe(res => {
    //   console.log("Result", res);
    //   this.person = res;
    //   this.status = 'Data Fetched'
    //   this.fetching = false;
    // }, (err) => {
    //   this.fetching = false;
    //   this.status = 'Problem Fetching Data'
    // })

    //Example 02 ->retryWhen

    this._http.get('https://global-1bb0f.firebaseio.com/user.json').
    pipe(
      retryWhen(err =>err.pipe(
        delay(3000), //it  delay retrying by 3 sec
        scan((retryCount)=>{ //Scan is used to scan the count of retry 
          if(retryCount>=5){
            throw err;
          }else{
            retryCount =retryCount+1;
            console.log("retry count ",retryCount);
            this.status='Retring Attep #'+retryCount;
            return retryCount
          }
        },0)
      ))
      ).subscribe(res => {
      this.person = res;
      this.status = 'Data Fetched'
      this.fetching = false;
    }, (err) => {
      this.fetching = false;
      this.status = 'Problem Fetching Data'
    })
  }

}
