import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { DartaComponent } from './darta/darta.component';
import { ChalaniComponent } from './chalani/chalani.component';
import { AddDartaComponent } from './add-darta/add-darta.component';
import { AddChalaniComponent } from './add-chalani/add-chalani.component';
import { DashboardComponent } from './dashboard/dashboard.component';

//Importing Reactive Forms Module
import {FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DataTablesModule } from 'angular-datatables';


//Importing Electron Files
import {NgxElectronModule} from 'ngx-electron';
import { FetchDartaService } from './fetch-darta.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const appRoutes: Routes = [
  {path: '', component:DashboardComponent},
  { path: 'darta', component: DartaComponent, runGuardsAndResolvers: 'always'},
  { path: 'chalani', component: ChalaniComponent, runGuardsAndResolvers: 'always'},
  {path:'add-darta',component:AddDartaComponent},
  {path:'add-chalani',component:AddChalaniComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    DartaComponent,
    ChalaniComponent,
    AddDartaComponent,
    AddChalaniComponent,
    DashboardComponent,
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
