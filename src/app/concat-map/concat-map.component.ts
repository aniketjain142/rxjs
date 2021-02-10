import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { from, of } from 'rxjs';
import { concatAll, concatMap, delay, map } from 'rxjs/operators';
import { DesignUtilityService } from '../design-utility.service';
import {Location} from '@angular/common';
import { log } from 'console';
import { setUncaughtExceptionCaptureCallback } from 'process';
import { summaryFileName } from '@angular/compiler/src/aot/util';

@Component({
  selector: 'app-concat-map',
  templateUrl: './concat-map.component.html',
  styleUrls: ['./concat-map.component.scss']
})
export class ConcatMapComponent implements OnInit {
  stay;
  path: any;

  constructor(private _du: DesignUtilityService,
    private _route: Router, private _location: Location) { }


  @HostListener('window:popstate', ['$event'])
  onPopState(event) {


    console.log(window.location.href)
    console.log('Back button pressed', event);
    // if (event) {
    //   this.stay = confirm('Are you sure you want to go back')
    //   if (!this.stay) {
    //     console.log('navigation');

    //     // this._route.navigate(['/observable/merge'])
    //     // window.location.replace(this.path);
    //     this._location.back();
    //     // this._route.navigate([this.path]);
    //   }
    //   else {
       
    //     // this._location.back();


    //   }
    // }

  }



  getData(data) {
    return of(data + 'Video Uploaded').pipe(delay(2000))
  }

  ngOnInit(): void {
    this.path = window.location.href

    const source = from(['tech', 'comedy', 'news']);

    //Ex-01|Map
    source.pipe(map(res => this.getData(res))).subscribe(res => {
      // console.log(res);
      res.subscribe(res => {
        console.log("Map result", res);
        this._du.printList(res, 'el')
      })
    })
    //Ex-02|MergeAll
    source.pipe(map(res => this.getData(res)), concatAll()).subscribe(res => {
      // console.log(res);
      this._du.printList(res, 'el1')
    })

    //Ex-03|MergeMap
    source.pipe(concatMap(res => this.getData(res))).subscribe(res => {
      // console.log(res);

      this._du.printList(res, 'el2')

    })
  }

}
