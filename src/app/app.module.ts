import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { DartaComponent } from './darta/darta.component';
import { ChalaniComponent } from './chalani/chalani.component';
import { AddDartaComponent } from './add-darta/add-darta.component';
import { AddChalaniComponent } from './add-chalani/add-chalani.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { SearchComponent } from './search/search.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SearchDartaComponent } from './search-darta/search-darta.component';
import { SearchChalaniComponent } from './search-chalani/search-chalani.component';

//Importing Reactive Forms Module
import {FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DataTablesModule } from 'angular-datatables';

import * as $ from 'jquery';


//Importing Electron Files
import {NgxElectronModule} from 'ngx-electron';
import { DartaSuccessComponent } from './darta-success/darta-success.component';
import { FetchDartaService } from './fetch-darta.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const appRoutes: Routes = [
  {path: '', component:DashboardComponent},
  { path: 'darta', component: DartaComponent, runGuardsAndResolvers: 'always'},
  {path:'chalani', component:ChalaniComponent},
  {path:'add-darta',component:AddDartaComponent},
  {path:'add-chalani',component:AddChalaniComponent},
  {path:'settings',component:SettingsComponent},
  {path:'profile', component:ProfileComponent},
  {path:'search-darta',component:SearchDartaComponent},
  { path: 'search-chalani', component: SearchChalaniComponent },
  {path:'darta-success', component:DartaSuccessComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    DartaComponent,
    ChalaniComponent,
    AddDartaComponent,
    AddChalaniComponent,
    ProfileComponent,
    SettingsComponent,
    SearchComponent,
    DashboardComponent,
    SearchDartaComponent,
    SearchChalaniComponent,
    DartaSuccessComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes, { enableTracing: true, onSameUrlNavigation: 'reload' }),
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    NgxElectronModule,
    BrowserAnimationsModule,
    DataTablesModule
  ],
  providers: [FetchDartaService],
  bootstrap: [AppComponent]
})


export class AppModule { }
