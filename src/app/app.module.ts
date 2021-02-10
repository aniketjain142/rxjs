import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import {MatButtonModule} from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PromiseComponent } from './promise/promise.component';
import { ObservableComponent } from './observable/observable.component';
import { AllComponent } from './observable/all/all.component';
import { FromEventComponent } from './observable/from-event/from-event.component';
import { IntervalComponent } from './interval/interval.component';
import { OfFromComponent } from './of-from/of-from.component';
import { ToArrayComponent } from './to-array/to-array.component';
import { CustomObservableComponent } from './custom-observable/custom-observable.component';
import { MapComponent } from './map/map.component';
import { PluckComponent } from './pluck/pluck.component';
import { FilterComponent } from './filter/filter.component';
import { TapComponent } from './tap/tap.component';
import { TakeComponent } from './take/take.component';
import { RetryComponent } from './retry/retry.component';
import { DebounceTimeComponent } from './debounce-time/debounce-time.component';
import { SubjectComponent } from './subject/subject.component';
import { Comp1Component } from './subject/comp1/comp1.component';
import { Comp2Component } from './subject/comp2/comp2.component';
import { Comp3Component } from './subject/comp3/comp3.component';
import { ReplayComponent } from './replay/replay.component';
import { AsyncSubjectComponent } from './async-subject/async-subject.component';
import { MergeMapComponent } from './merge-map/merge-map.component';
import { ConcatMergeComponent } from './concat-merge/concat-merge.component';
import { ConcatMapComponent } from './concat-map/concat-map.component';
import { SwitchMapComponent } from './switch-map/switch-map.component';
import { SearchSwitchmapComponent } from './search-switchmap/search-switchmap.component';
import { ExhaustMapComponent } from './exhaust-map/exhaust-map.component';
import { ShareReplayComponent } from './share-replay/share-replay.component';
import { ZipForkjoinComponent } from './zip-forkjoin/zip-forkjoin.component';
import { CombineLatestComponent } from './combine-latest/combine-latest.component';
import { MaterialDatatableComponent } from './material-datatable/material-datatable.component';
import {MatTableModule} from '@angular/material/table';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSortModule} from '@angular/material/sort';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgHttpLoaderModule } from 'ng-http-loader';
import {AboutModule} from './about/about.module';
import { LoginComponent } from './login/login.component';
import { RecaptchaModule, RecaptchaFormsModule } from 'ng-recaptcha';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PromiseComponent,
    ObservableComponent,
    AllComponent,
    FromEventComponent,
    IntervalComponent,
    OfFromComponent,
    ToArrayComponent,
    CustomObservableComponent,
    MapComponent,
    PluckComponent,
    FilterComponent,
    TapComponent,
    TakeComponent,
    RetryComponent,
    DebounceTimeComponent,
    SubjectComponent,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    ReplayComponent,
    AsyncSubjectComponent,
    MergeMapComponent,
    ConcatMergeComponent,
    ConcatMapComponent,
    SwitchMapComponent,
    SearchSwitchmapComponent,
    ExhaustMapComponent,
    ShareReplayComponent,
    ZipForkjoinComponent,
    CombineLatestComponent,
    MaterialDatatableComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    MatTableModule,
    MatButtonModule,
    NgHttpLoaderModule.forRoot(),
    MatSortModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    AboutModule,
    RecaptchaModule,
    RecaptchaFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){
    console.log("App module");
  }
  
  
 }
