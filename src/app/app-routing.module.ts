import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AsyncSubjectComponent } from './async-subject/async-subject.component';
import { CombineLatestComponent } from './combine-latest/combine-latest.component';
import { ConcatMapComponent } from './concat-map/concat-map.component';
import { ConcatMergeComponent } from './concat-merge/concat-merge.component';
import { CustomObservableComponent } from './custom-observable/custom-observable.component';
import { DebounceTimeComponent } from './debounce-time/debounce-time.component';
import { ExhaustMapComponent } from './exhaust-map/exhaust-map.component';
import { FilterComponent } from './filter/filter.component';
import { IntervalComponent } from './interval/interval.component';
import { LoginComponent } from './login/login.component';
import { MapComponent } from './map/map.component';
import { MaterialDatatableComponent } from './material-datatable/material-datatable.component';
import { MergeMapComponent } from './merge-map/merge-map.component';
import { AllComponent } from './observable/all/all.component';
import { FromEventComponent } from './observable/from-event/from-event.component';
import { ObservableComponent } from './observable/observable.component';
import { OfFromComponent } from './of-from/of-from.component';
import { PluckComponent } from './pluck/pluck.component';
import { PromiseComponent } from './promise/promise.component';
import { ReplayComponent } from './replay/replay.component';
import { RetryComponent } from './retry/retry.component';
import { SearchSwitchmapComponent } from './search-switchmap/search-switchmap.component';
import { ShareReplayComponent } from './share-replay/share-replay.component';
import { SubjectComponent } from './subject/subject.component';
import { SwitchMapComponent } from './switch-map/switch-map.component';
import { TakeComponent } from './take/take.component';
import { TapComponent } from './tap/tap.component';
import { ToArrayComponent } from './to-array/to-array.component';
import { ZipForkjoinComponent } from './zip-forkjoin/zip-forkjoin.component';

const routes: Routes = [
  { path: 'promise', component: PromiseComponent },
  { path: 'observable', component: ObservableComponent,children:[
    {path:'',component:AllComponent},
    {path:'from-event',component:FromEventComponent},
    {path:'interval',component:IntervalComponent},
    {path:'of',component:OfFromComponent},
    {path:'toArray',component:ToArrayComponent},
    {path:'custom',component:CustomObservableComponent},
    {path:'map',component:MapComponent},
    {path:'pluck',component:PluckComponent},
    {path:'filter',component:FilterComponent},
    {path:'tap',component:TapComponent},
    {path:'take',component:TakeComponent},
    {path:'retry',component:RetryComponent},
    {path:'debounceTime',component:DebounceTimeComponent},
    {path:'subject',component:SubjectComponent},
    {path:'replay',component:ReplayComponent},
    {path:'async',component:AsyncSubjectComponent},
    {path:'concet',component:ConcatMergeComponent},
    {path:'merge',component:MergeMapComponent},
    {path:'concatMap',component:ConcatMapComponent},
    {path:'switchMap',component:SwitchMapComponent},
    {path:'searchswitchmap',component:SearchSwitchmapComponent},
    {path:'exhaustmap',component:ExhaustMapComponent},
    {path:'sharereplay',component:ShareReplayComponent},
    {path:'combinelatest',component:CombineLatestComponent},
    {path:'zip',component:ZipForkjoinComponent},
    {path:'table',component:MaterialDatatableComponent},
  ] },
  { path: 'about', component:AboutComponent},
  { path: 'login', component:LoginComponent},
  { path: '**', redirectTo: 'promise' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
