import { Component, OnInit } from '@angular/core';
import { from, interval, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { DesignUtilityService } from '../design-utility.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {


  sub1: Subscription;
  sub2: Subscription;
  data1: any;
  data2: any;
  constructor(private _designUtility:DesignUtilityService) { }

  ngOnInit(): void {
    //Ex -01

    const broadCastVideos = interval(1000)
    this.sub1 = broadCastVideos.pipe(map(data =>
      'Video ' + data

    )).subscribe(res => {
      // console.log('Video',res); //we should not use this method nhi to real data me change ho jata hai
      console.log(res);
      this.data1 = res;

    });
    setTimeout(() => {
      this.sub1.unsubscribe()
    }, 3000)
    //Example 2

    const broadCastVideos2 = interval(1000)
    this.sub2 = broadCastVideos.pipe(map(data =>
      3 * data
    )).subscribe(res => {
      this.data2 = res;
    });

    setTimeout(() => {
      this.sub2.unsubscribe()
    }, 3000)

    const users=from([
      {id:1,name:'aniket'},
      {id:1,name:'aniket'},
      {id:1,name:'aniket'},
      {id:1,name:'aniket'},
      {id:1,name:'aniket'},
    ])

    users.pipe(map(data=> data.name)).subscribe(
      res=>{
      this._designUtility.printList(res,'elContainer')
      }
    )


  }

}
