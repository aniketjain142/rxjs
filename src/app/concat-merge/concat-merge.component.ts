import { Component, OnInit } from '@angular/core';
import {  interval,concat, merge } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { DesignUtilityService } from '../design-utility.service';

@Component({
  selector: 'app-concat-merge',
  templateUrl: './concat-merge.component.html',
  styleUrls: ['./concat-merge.component.scss']
})
export class ConcatMergeComponent implements OnInit {

  constructor(private _du:DesignUtilityService) { }

  ngOnInit(): void {
 
    const sourceTech=   interval(1000).pipe(map(res => 'Tech video #' + (res + 1)), take(5))
    const sourceComedy = interval(1000).pipe(map(res => 'Comedy video #' + (res + 1)), take(3))
    const sourceNews = interval(1000).pipe(map(res => 'News video #' + (res + 1)), take(4))

    const FinalObs=concat(sourceTech,sourceComedy,sourceNews);
    const FinalObs1=merge(sourceTech,sourceComedy,sourceNews);
    FinalObs1.subscribe(res=>{
      console.log(res);
     this._du.printList(res,'el')
    })

  }

}
