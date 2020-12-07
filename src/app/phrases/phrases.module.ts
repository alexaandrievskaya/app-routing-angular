import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhrasesRoutingModule } from './phrases-routing.module';
import {PhrasesListComponent} from './phrases-list/phrases-list.component';
import {PhraseDetailComponent} from './phrase-detail/phrase-detail.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [PhrasesListComponent, PhraseDetailComponent],
    imports: [
        CommonModule,
        PhrasesRoutingModule,
        FormsModule
    ]
})
export class PhrasesModule { }

