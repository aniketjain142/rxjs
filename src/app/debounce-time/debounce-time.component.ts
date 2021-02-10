import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

@Component({
  selector: 'app-debounce-time',
  templateUrl: './debounce-time.component.html',
  styleUrls: ['./debounce-time.component.scss']
})
export class DebounceTimeComponent implements AfterViewInit {
  @ViewChild('myInput') myInput: ElementRef;
  @ViewChild('myInput1') myInput1: ElementRef;
  reData = null;
  reData1=null;
  constructor() { }
  ngAfterViewInit(): void {
    //Ex-01 Debounce TIme
    const search = fromEvent<any>(this.myInput.nativeElement, 'keyup');
    search.pipe(
      map(event => event.target.value),
      debounceTime(1000) // ki humko kitne sec bad resuest send karni hai server per
    ).subscribe(res => {
      console.log(res);
      this.reData = res;

      setTimeout(() => {
        this.reData = null;

      }, 1000)
    })

    //Distinct Until Changed
    const search1 = fromEvent<any>(this.myInput1.nativeElement, 'keyup');
    search1.pipe(
      map(event => event.target.value),
      debounceTime(1000) ,// ki humko kitne sec bad resuest send karni hai server per
      distinctUntilChanged() //Duplicate value ki rst na jaye api me
      ).subscribe(res => {
      console.log(res);
      this.reData1 = res;

      setTimeout(() => {
        this.reData1 = null;

      }, 1000)
    })
  }





}
