// import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountriesCompComponent } from './countries-comp/countries-comp.component';
import { DetailsCompComponent } from './details-comp/details-comp.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    CountriesCompComponent,
    DetailsCompComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
        
    RouterModule.forChild([
      // { path: '', component:SearchComponent},
      { path: '', component:CountriesCompComponent},
      { path: 'detail/:id', component:DetailsCompComponent},
      { path: 'search', component:SearchComponent},
      // { path: 'search', component:CountriesCompComponent},
    ])
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
