import { Component, OnInit } from '@angular/core';
import { resolve } from 'dns';
import { from, of } from 'rxjs';
import { DesignUtilityService } from '../design-utility.service';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.scss']
})
export class OfFromComponent implements OnInit {
 obsMsg;
  constructor(private _design: DesignUtilityService) { }

  ngOnInit(): void {
//of operater ke argument me jo bhe rahega woh as an  observable stream react karega     
    const Obsl = of('aniket', 'rohit', 'raman');
    Obsl.subscribe(res => {
      this._design.printList(res, 'elContainer')
    })
    const Obsl1 = of({a:'aniket', b:'rohit', c:'raman'}); 
    Obsl1.subscribe(res => {
      this.obsMsg=res;
    })
//
// From operater me hum  array ke item ko as an observable use kar skte hai .
// aur array ke alawa hum promise bhe use kar skte hai   
    const Obsl2= from(['aman','rohan','rajat']);
    //From array
    Obsl2.subscribe(res=>{
      this._design.printList(res, 'elContainer2')
    })

    //from Promise
    const promise=new Promise(resolve =>{
      setTimeout(()=>{
        resolve('Promise Resolved')
      },3000)
    })
    promise.then(res=>{
      console.log(res);
    })
    const Obsl3= from(promise);
    Obsl3.subscribe(res=>{
      this._design.printList(res, 'elContainer3')
    })
    //fROM String
    const Obsl4= from('aniket');
    Obsl4.subscribe(res=>{
      this._design.printList(res, 'elContainer4')
    })
  }

}
