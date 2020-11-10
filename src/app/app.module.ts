import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {PhrasesModule} from './phrases/phrases.module';
/* import { PhrasesListComponent } from './phrases/phrases-list/phrases-list.component';
import { PhraseDetailComponent } from './phrases/phrase-detail/phrase-detail.component';*/

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    /* PhrasesListComponent,
    PhraseDetailComponent */
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PhrasesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
