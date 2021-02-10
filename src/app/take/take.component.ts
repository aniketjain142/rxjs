import { Component, OnInit } from '@angular/core';
import { from, fromEvent, interval, timer } from 'rxjs';
import { map, take, takeLast, takeUntil } from 'rxjs/operators';
import { DesignUtilityService } from '../design-utility.service';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.scss']
})
export class TakeComponent implements OnInit {
  names = ['aman', 'rohan', 'rajat', 'aniket', 'vijay']
  constructor(private _du: DesignUtilityService) { }
  
  ngOnInit(): void {
  
    const nameSource= from(this.names)
  //Ex- 01 take
    nameSource.pipe(take(4)).subscribe(res => {
      console.log(res);
      this._du.printList(res, 'el');
    })
    //Ex02 takelast
    nameSource.pipe(takeLast(2)).subscribe(res => {
      console.log(res);
      this._du.printList(res, 'el1');
    })

     //Ex03 TakeUntil
     const source=interval(1000);
     let condition = timer(6000);
     let condition2 = fromEvent(document,'click');
     source.pipe(map(res=> 'number '+res),takeUntil(condition2)).subscribe(res => {
      console.log(res);
      this._du.printList(res, 'el2');
    })
  }

}
