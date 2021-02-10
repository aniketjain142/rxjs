import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription, timer } from 'rxjs';
import { DesignUtilityService } from '../design-utility.service';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.scss']
})
export class IntervalComponent implements OnInit,OnDestroy {
  obsMsg;
  videoSubscription: Subscription;
  constructor(private _designUtility: DesignUtilityService) { }
 

  ngOnInit(): void {
    // const broadCastVideos= interval(1000);
    const broadCastVideos = timer(5000, 1000);
    //timer(delay,interval)
    this.videoSubscription = broadCastVideos.subscribe(res => {
      console.log(res);
      this.obsMsg = res;
      if(res){
        this._designUtility.printList(this.obsMsg, "elContainer");
        this._designUtility.printList(this.obsMsg, "elContainer1");
        this._designUtility.printList(this.obsMsg, "elContainer2");
      }
    
      if (res >= 5) {
        this.videoSubscription.unsubscribe();
      }
    })
  }
  ngOnDestroy(): void {
    this.videoSubscription.unsubscribe()
  }
   
}
