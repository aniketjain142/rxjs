import { Component, OnInit } from '@angular/core';
import { title } from 'process';
import { from } from 'rxjs';
import { pluck, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-pluck',
  templateUrl: './pluck.component.html',
  styleUrls: ['./pluck.component.scss']
})
export class PluckComponent implements OnInit {
  names:string[];
  nestedData;
  constructor() { }
 

  ngOnInit(): void {
    const users=from([
      {id:1,name:'aniket',branch:'cs',job:{
        title:'Angular Developer'
      }},
      {id:2,name:'Rohan',branch:'cs',job:{
        title:'css Developer'
      }},
      {id:3,name:'Raman',branch:'cs',job:{
        title:'php Developer'
      }},
      {id:4,name:'aman',branch:'cs',job:{
        title:'Angular Developer'
      }},
      {id:5,name:'manu',branch:'cs',job:{
        title:'java Developer'
      }},
    ]);
    //Ex-> 01
    users.pipe(pluck('name'),toArray()).subscribe(res=>{
      console.log("result ",res);
      this.names=res;
    })
    //Ex-02
    users.pipe(pluck('job','title'),toArray()).subscribe(res=>{
      console.log("result ",res);
      this.nestedData=res;
    })
  }
 
}
