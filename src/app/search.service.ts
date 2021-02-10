import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Search } from './app-interface/search.interface';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  url = 'https://my-json-server.typicode.com/Uxtrendz/apis/videolist';
  constructor(private http:HttpClient) { }

  getSearches(searchTerm):Observable<Search>{
 return   this.http.get<Search>(this.url+'?q='+searchTerm);
  }
  
}
