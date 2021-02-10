import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Button } from 'protractor';
import { fromEvent } from 'rxjs';
import { DesignUtilityService } from 'src/app/design-utility.service';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.scss']
})
export class FromEventComponent implements OnInit,AfterViewInit {
@ViewChild('addBtn') addBtn:ElementRef;
  constructor(private _designUtility:DesignUtilityService) { }

  ngOnInit(): void {
    
  }
  ngAfterViewInit(){
    let count=1;
    fromEvent(this.addBtn.nativeElement,'click').subscribe(res=>{
      console.log("Response",res);
      let countVal = "Video " + count++
      this._designUtility.printList(countVal,'elContainer');
      this._designUtility.printList(countVal,'elContainer2');
    })
  }



}
