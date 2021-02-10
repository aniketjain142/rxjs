import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { DesignUtilityService } from '../design-utility.service';

@Component({
  selector: 'app-custom-observable',
  templateUrl: './custom-observable.component.html',
  styleUrls: ['./custom-observable.component.scss']
})
export class CustomObservableComponent implements OnInit {
  techStatus: string;
  techStatus2: string;
  sub2: Subscription;
  names;
  nameStatus:string;
  constructor(private _desginUtility: DesignUtilityService) { }

  ngOnInit(): void {
    //Ex - 01 (Manual)
    const cusObs1: Observable<any> = Observable.create(observer => {
      setTimeout(() => {
        observer.next('Angular');
      }, 1000);
      setTimeout(() => {
        observer.next('js');

      }, 2000);
      setTimeout(() => {
        observer.next('java');
        // observer.error(new Error('limit failed')); 
        observer.complete();
      }, 3000);
      setTimeout(() => {
        observer.next('html & css');
      }, 6000);
      setTimeout(() => {
        observer.next('php');
        //jab complete ho jata hai toh bad ka data show nhi hoGA

      }, 8000);

    }) //We have created custom observable

    //subcribe(data,error,completion)
    cusObs1.subscribe(res => {
      // console.log(res);
      this._desginUtility.printList(res, 'elContainer')
    }, (err) => {
      this.techStatus = 'error';
    }, () => {
      this.techStatus = 'completed';
    });

    //Ex -02 (Custom Interval)
    const Arr2 = ['Angular', 'Javascrpit', 'Html', 'Css', 'TypeScrpit']
    const cusObs2 = Observable.create(observer => {
      let count = 1;
      setInterval(() => {
        observer.next(Arr2[count]);

        if (count >= 3) {
          observer.error('Error Emit');
        }
        if (count >= 5) {
          observer.complete();
        }
        count++;
      }, 1000)
    });
    this.sub2 = cusObs2.subscribe(res => {
      // console.log(res);
      this._desginUtility.printList(res, 'elContainer2');
    }, (err) => {
      this.techStatus2 = 'error'
    }, () => {
      this.techStatus2 = 'completed'
    })


    const Arr3 = ['Aniket', 'Aman', 'Rohit', 'Raman', 'manu']
    const cusObs3 = Observable.create(observer => {
      let count = 0;
      setInterval(() => {
        observer.next(Arr3[count]);

        // if(count >=3){
        //   observer.error('Error Emit');
        // }
        if (count >=4 ) {
          observer.complete();

        }
        count++;
      }, 1000)
    });

    cusObs3.subscribe(res => {
      console.log("Res",res);
      
      this.names = res;
    },(err)=>{
      this.nameStatus='error'
    },()=>{
      this.nameStatus='completed'
    })
  }

  ngOnDestroy() {
    this.sub2.unsubscribe();
  }

}
