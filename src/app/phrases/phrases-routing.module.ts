import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PhrasesListComponent} from './phrases-list/phrases-list.component';
import {PhraseDetailComponent} from './phrase-detail/phrase-detail.component';

const routes: Routes = [
  {path: 'phrases', component: PhrasesListComponent},
  {path: 'phrase/:id', component: PhraseDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhrasesRoutingModule { }
