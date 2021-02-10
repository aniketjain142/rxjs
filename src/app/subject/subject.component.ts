import { Component, OnDestroy, OnInit } from '@angular/core';
import { DesignUtilityService } from '../design-utility.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit,OnDestroy {
userName:string;
  constructor(private _du:DesignUtilityService) { 
    this._du.userName.subscribe(res=>{
      this.userName=res;
    })
  }


  ngOnInit(): void {
    this._du.exclusive.next(true);
  }
  ngOnDestroy(): void {
    this._du.exclusive.next(false);
  }
}
