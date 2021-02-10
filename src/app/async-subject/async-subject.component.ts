import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from '../design-utility.service';

@Component({
  selector: 'app-async-subject',
  templateUrl: './async-subject.component.html',
  styleUrls: ['./async-subject.component.scss']
})
export class AsyncSubjectComponent implements OnInit {
  videoEmitByAsync:string;
  constructor(private _du:DesignUtilityService) { 
    
  }

  ngOnInit(): void {
    this._du.videoEmitByAsync.subscribe(res =>{
      this.videoEmitByAsync=res;
    })
  }
  addVideo(video){
    this._du.videoEmitByAsync.next(video.value);
  }

  subscribe(){
   this._du.videoEmitByAsync.complete(); //jab tab hum complete nhi karegay tab tak mjhe value nhi milegi
  }
}
