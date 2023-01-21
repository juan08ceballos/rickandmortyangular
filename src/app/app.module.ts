import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowComponent } from './show/show.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './filter.pipe';
import { HttpClientModule } from '@angular/common/http'
import {NgxPaginationModule} from "ngx-pagination";
import { SearchStatusComponent } from './search-status/search-status.component';
import { FilterStatusPipe } from './filter-status.pipe';




@NgModule({
  declarations: [
    AppComponent,
    ShowComponent,
    SearchComponent,
    FilterPipe,
    SearchStatusComponent,
    FilterStatusPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
