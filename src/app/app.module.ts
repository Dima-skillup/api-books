import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { BooksComponent } from './books/books.component';
import {FormsModule} from '@angular/forms';
import { SearchPipe } from './search.pipe';
import { SortnamePipe } from './sortname.pipe';


@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,

    SearchPipe,
    SortnamePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
