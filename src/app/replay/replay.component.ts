import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { DesignUtilityService } from '../design-utility.service';

@Component({
  selector: 'app-replay',
  templateUrl: './replay.component.html',
  styleUrls: ['./replay.component.scss']
})
export class ReplayComponent implements OnInit {
  @ViewChild('video') input: ElementRef;
  constructor(private _du: DesignUtilityService) { }
  user1List = ['Angular 1', 'Angular 2'];
  user2List = [];
  user3List = [];
  //Subcribe Mode
  subcribeMode2: boolean = false;
  subcribeMode3: boolean = false;

  //subscriptions
  subscription2: Subscription;
  subscription3: Subscription;


  //Toggle Properties
  methodInterval: boolean = false;
  broadCastSubcription: Subscription;

  ngOnInit(): void {
    this._du.videoEmit.subscribe(res => {
      this.user1List.push(res);
    })
  }
  addVideo(video) {
    console.log(video.value);
    this._du.videoEmit.next(video.value);
    this.input.nativeElement.value = ''
  }
  user2Subcribe() {
    if (this.subcribeMode2) {
      this.subscription2.unsubscribe();
    } else {
      this.subscription2 = this._du.videoEmit.subscribe(res => {
        console.log("User list 2", res);

        this.user2List.push(res);
      })
    }
    this.subcribeMode2 = !this.subcribeMode2;


  }
  user3Subcribe() {
    if (this.subcribeMode3) {
      this.subscription3.unsubscribe();
    } else {
      this.subscription3 = this._du.videoEmit.subscribe(res => {
        this.user3List.push(res);
      })
    }

    this.subcribeMode3 = !this.subcribeMode3;
  }

  //Toggle method
  toggle() {
    const broadCastVideo = interval(2000);
    this.methodInterval = !this.methodInterval;
    if (this.methodInterval) {
      this.broadCastSubcription = broadCastVideo.subscribe(res => {
        this._du.videoEmit.next('video ' + res)
      })
    } else {
      this.broadCastSubcription.unsubscribe();
    }

    
  }

}
