import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { map, mergeAll, mergeMap } from 'rxjs/operators';
import { DesignUtilityService } from '../design-utility.service';

@Component({
  selector: 'app-merge-map',
  templateUrl: './merge-map.component.html',
  styleUrls: ['./merge-map.component.scss']
})
export class MergeMapComponent implements OnInit {

  constructor(private _du:DesignUtilityService) { }
getData(data){
  return of(data+'Video Uploaded')
}

  ngOnInit(): void {
    const source=from(['tech','comedy','news']);

    //Ex-01|Map
    source.pipe(map(res=> this.getData(res))).subscribe(res=>{
     // console.log(res);
      res.subscribe(res=>{
        console.log("Map result",res); 
        this._du.printList(res,'el')   
      })
    })
      //Ex-02|MergeAll
    source.pipe(map(res=> this.getData(res)),mergeAll()).subscribe(res=>{
      // console.log(res);
      this._du.printList(res,'el1') 
     })

     //Ex-03|MergeMap
    source.pipe(mergeMap(res=> this.getData(res))).subscribe(res=>{
      // console.log(res);
      
         this._du.printList(res,'el2')   
     
     })

  }

}
