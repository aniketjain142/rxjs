import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { concatMap, debounceTime, distinctUntilChanged, filter, pluck, switchMap } from 'rxjs/operators';
import { Search } from '../app-interface/search.interface';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-search-switchmap',
  templateUrl: './search-switchmap.component.html',
  styleUrls: ['./search-switchmap.component.scss']
})
export class SearchSwitchmapComponent implements OnInit, AfterViewInit {
  searchResults:Search;
  searchResultCount:number;
  @ViewChild('search') search: NgForm;
  constructor(private _search: SearchService) { }
  ngAfterViewInit(): void {
    const formValue = this.search.valueChanges;
    formValue.pipe(
      filter(()=>this.search.valid), //reust tab jayegi jab koi search me type karega
      pluck('searchTerm'),
      debounceTime(500),
      distinctUntilChanged(),
      switchMap(data => this._search.getSearches(data))
    ).subscribe(res => {
      this.searchResults=res;
      this.searchResultCount=Object.keys(res).length;
      console.log("Form Value", res);
    })

  }


  ngOnInit(): void {
  }

}
