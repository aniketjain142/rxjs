import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from 'src/app/design-utility.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.scss']
})
export class Comp1Component implements OnInit {
  userName:string;
  constructor(private _du:DesignUtilityService) { }

  ngOnInit(): void {
    this._du.userName.subscribe(res=>{
      this.userName=res;
    })
  }
  onChange(uname){
  console.log(uname);
  this._du.userName.next(uname.value);
  }

}
