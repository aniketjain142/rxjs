import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { DesignUtilityService } from '../design-utility.service';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.scss']
})
export class TapComponent implements OnInit {
  myColor;
  constructor(private _designUtitlity: DesignUtilityService) { }

  ngOnInit(): void {
    //Ex-01
    const Arr = ['aman', 'rohan', 'rajat', 'rohit', 'john', 'furry']
    const source = interval(1500);
    let obsSub: Subscription;
    obsSub = source.pipe(
      tap(res => {
        // console.log("Tap Before =>"+res);
        if (res >= 5) {
          obsSub.unsubscribe();
        }
      }),
      map(data => Arr[data])
      ,
      //tap(res => console.log("Tap After =>"+res) //agar humre kisi operter me error aa rahi ho toh hum uske phele tap use karke data check kar skte hai
      //)
      // if (data > 5) {
      //   obsSub.unsubscribe();      agar hum asa unsubscribe karege toh undefined value aayegi
      //toh hum map ko apne kam karne degaye aur tap operator ko use karke unsubscribe karge 
      // }

    ).subscribe(res => {
      console.log();
      this._designUtitlity.printList(res, 'el');
    })

    //Ex-02
    const Arr2 = ['red', 'pink', 'blue', 'green', 'yellow']
    let obsSub2: Subscription;
    obsSub2 = source.pipe(
      tap(res => {
        this.myColor=Arr2[res];
        sessionStorage.setItem('tap',res.toString());
        if (res >4) {
          obsSub2.unsubscribe();
        }
      }),
      map(data => Arr2[data]),

    ).subscribe(res => {
      console.log();
      this._designUtitlity.printList(res, 'el1');
    })

  }

}
