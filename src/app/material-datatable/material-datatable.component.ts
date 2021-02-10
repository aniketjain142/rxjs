import { HttpClient } from '@angular/common/http';
import { stringify } from '@angular/compiler/src/util';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { merge, observable, Observable, of } from 'rxjs';
import { catchError, delay, map, retry, retryWhen, scan, startWith, switchMap, tap } from 'rxjs/operators';
import { DesignUtilityService } from '../design-utility.service';

@Component({
  selector: 'app-material-datatable',
  templateUrl: './material-datatable.component.html',
  styleUrls: ['./material-datatable.component.scss']
})
export class MaterialDatatableComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['created', 'state', 'number', 'title'];
  data: GithubIssue[] = [];
  resultLength = 0;
  exampleDatabase: ExampleHttpDatabase | null;
  isLoadingResult = true;
  isRateLimitReached = false;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor(private _gitData: DesignUtilityService,private _httpClient: HttpClient) { }
  ngAfterViewInit(): void {
    this.exampleDatabase = new ExampleHttpDatabase(this._httpClient);

    // If the user changes the sort order, reset back to the first page.
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isLoadingResult= true;
          return this.exampleDatabase!.getRepoIssues(
            this.sort.active, this.sort.direction, this.paginator.pageIndex);
        }),
        retryWhen(err =>err.pipe(
          delay(3000), //it  delay retrying by 3 sec
          scan((retryCount)=>{ //Scan is used to scan the count of retry 
            if(retryCount>=5){
              throw err;
            }else{
              retryCount =retryCount+1;
              console.log("retry count ",retryCount);

              return retryCount
            }
          },0)
        )),
        map((data:GithubApi) => {
          // Flip flag to show that loading has finished.
          this.isLoadingResult= false;
          this.isRateLimitReached = false;
          this.resultLength = data.total_count;

          return data.items;
        }),
        catchError(() => {
          this.isLoadingResult = false;
          // Catch if the GitHub API has reached its rate limit. Return empty data.
          this.isRateLimitReached = true;
          return of([]);
        })
      ).subscribe(data => this.data = data);
  }
  

  ngOnInit(): void {
    // this._gitData.getRepoIssues().pipe(tap(()=>this.isLoadingResult=false)).subscribe(res=>{
    //   console.log("Result",res);
    //   this.data=res.items
      
    // })

  }



}

export interface GithubIssue {
  created_at: string;
  number: string;
  state: string;
  title: string;
}

export interface GithubApi {
  items: GithubIssue[];
  total_count: number;
}


export class ExampleHttpDatabase {
  constructor(private _httpClient: HttpClient) {}

  getRepoIssues(sort: string, order: string, page: number): Observable<GithubApi> {
    const href = 'https://api.github.com/search/issues';
    const requestUrl =
        `${href}?q=repo:angular/components&sort=${sort}&order=${order}&page=${page + 1}`;

    return this._httpClient.get<GithubApi>(requestUrl);
  }
}
