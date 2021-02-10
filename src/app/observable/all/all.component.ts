import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss']
})
export class AllComponent implements OnInit {

  constructor(private _route:Router) { }

  ngOnInit(): void {
 
  }
  resolved(event){
    console.log(event);
    
  }
}
