import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { concatMap, delay, map, mergeMap, switchAll, switchMap } from 'rxjs/operators';
import { DesignUtilityService } from '../design-utility.service';

@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.scss']
})
export class SwitchMapComponent implements OnInit {

  constructor(private _du: DesignUtilityService,) { }

  ngOnInit(): void {
    const source = from(['tech', 'comedy', 'news']);

    //Ex-01|Map
    source.pipe(map(res => this.getData(res))).subscribe(res => {
      // console.log(res);
      res.subscribe(res => {
        console.log("Map result", res);
        this._du.printList(res, 'el')
      })
    })
    //Ex-02|Map + SwitchAll
    source.pipe(map(res => this.getData(res)), switchAll()).subscribe(res => {
      // console.log(res);
      this._du.printList(res, 'el1')
    })
  
    //Ex-03|MergeMap
    source.pipe(switchMap(res => this.getData(res))).subscribe(res => {
      // console.log(res);
  
      this._du.printList(res, 'el2')
  
    })

     //Ex-01|Concat Map
     source.pipe(concatMap(res => this.getData(res))).subscribe(res => {
      // console.log(res);
     
        this._du.printList(res, 'el3')
    
    })
    //Ex-02|Merge Map
    source.pipe(mergeMap(res => this.getData(res)), ).subscribe(res => {
      // console.log(res);
      this._du.printList(res, 'el4')
    })
  
    //Ex-03|Switch Map
    source.pipe(switchMap(res => this.getData(res))).subscribe(res => {
      // console.log(res);
  
      this._du.printList(res, 'el5')
  
    })
    
  }
  getData(data) {
    return of(data + 'Video Uploaded').pipe(delay(2000))
  }
 
}
