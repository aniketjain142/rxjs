import { Component, OnInit } from '@angular/core';
import { from, interval, of, Subscription } from 'rxjs';
import { take, toArray } from 'rxjs/operators';
@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.scss']
})
export class ToArrayComponent implements OnInit {

  sourceSub: Subscription;
  constructor() { }
  users = [
    { name: 'aniket', skill: 'angular' },
    { name: 'aniket', skill: 'angular' },
    { name: 'aniket', skill: 'angular' },
    { name: 'aniket', skill: 'angular' },
  ]




  ngOnInit(): void {
    //Ex-1
    const source = interval(1000);
    this.sourceSub = source.pipe(
      take(5), //it will show only  value afterward it will unsubcribe 
      toArray()).subscribe(res => {
        console.log(res);
      });
    //Ex-2
    const source2 = from(this.users);
    source2.pipe(toArray()).subscribe(res => {
      console.log("Converting observable to Array ->", res);

    })
    //Ex-3
    const source3 = of('aniket','rohit','rohan','mohan');
    source3.pipe(toArray()).subscribe(res => {
      console.log("Converting observable to Array ->", res);

    })
  }

}
