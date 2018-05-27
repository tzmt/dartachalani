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
import { ReactiveFormsModule } from '@angular/forms';

const appRoutes: Routes = [
  {path: '', component:DashboardComponent},
  {path:'darta', component:DartaComponent},
  {path:'chalani', component:ChalaniComponent},
  {path:'add-darta',component:AddDartaComponent},
  {path:'add-chalani',component:AddChalaniComponent},
  {path:'settings',component:SettingsComponent},
  {path:'profile', component:ProfileComponent},
  {path:'search-darta',component:SearchDartaComponent},
  { path: 'search-chalani', component: SearchChalaniComponent }

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
    SearchChalaniComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes, {enableTracing:true}),
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
