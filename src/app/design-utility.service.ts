import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AsyncSubject, BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';
import { GithubApi } from './material-datatable/material-datatable.component';

@Injectable({
  providedIn: 'root'
})
export class DesignUtilityService {
  exclusive = new Subject<boolean>();
  // userName =new Subject<string>();
  userName = new BehaviorSubject<string>('aniket142');
  // videoEmit =new ReplaySubject<string>(3);
  videoEmit = new ReplaySubject<string>(3, 5000); //Agar humko chaiye hai ki kuch sec ke ander ander jo bhe subcribe karge unko he woh value dekhegi 
  // ReplaySubject<string>(kitni value emit karna hai ,kitne time ke ander subcribe hona chaiye)
  videoEmitByAsync = new AsyncSubject<string>();
  //Jab tak complete nhi karegaye tab tak value emit nhi kargega
  //And it will emit Last value only
  constructor(private _http:HttpClient) { }
  printList(val, containerId) {
    if(val){
      let el = document.createElement('li');
      el.innerText = val;
      document.getElementById(containerId).appendChild(el);
    }
 
  }
  getRepoIssues():Observable<any>{
    // console.log("Calling Api",sort ,order ,page);
    
    const href = 'https://api.github.com/search/issues';
    const requestUrl =  `${href}?q=repo:angular/components&sort=created&order=desc&page=1`;

    return this._http.get<any>(requestUrl);
  }
}
