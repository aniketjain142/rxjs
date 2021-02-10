import { Component, OnInit } from '@angular/core';
import { from, Observable } from 'rxjs';
import { filter, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  dataArr = [
    { id: 1, name: 'aniket', gender: 'male' },
    { id: 2, name: 'manu', gender: 'female' },
    { id: 3, name: 'ani', gender: 'male' },
    { id: 4, name: 'tannu', gender: 'female' },
    { id: 5, name: 'aman', gender: 'male' },
    { id: 6, name: 'ankita', gender: 'female' },
    { id: 7, name: 'raman', gender: 'male' },
    { id: 8, name: 'rohit', gender: 'male' },
    { id: 9, name: 'karnika', gender: 'female' },
    { id: 10, name: 'rohan', gender: 'male' },
    { id: 11, name: 'ajay', gender: 'male' },
  ];
  userData: Observable<any>;
  data;
  genderFilter;
  nthIteam;
  constructor() { }

  ngOnInit(): void {
    this.userData = from(this.dataArr);
    //Example -01 filter by length
    this.userData.pipe(filter(res=>
      res.name.length >4
    ),toArray()).subscribe(res => {
      console.log(res);
      this.data=res;
    })
     //Example -02 filter by Gender
     
     this.userData.pipe(filter(res=>
      res.gender=='female'
    ),toArray()).subscribe(res => {
      this.genderFilter=res;
    })

     //Example -03 filter by nth iteam
     
     this.userData.pipe(filter(res=>
      res.id <5
    ),toArray()).subscribe(res => {
      this.nthIteam=res;
    })


  }

}
