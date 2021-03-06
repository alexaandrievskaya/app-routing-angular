import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PhrasesListComponent} from './phrases-list/phrases-list.component';
import {PhraseDetailComponent} from './phrase-detail/phrase-detail.component';
import {PhraseHomeComponent} from './phrase-home/phrase-home.component';

const routes: Routes = [
  {path: '', redirectTo: 'phrases', pathMatch: 'full'},
  {
    path: 'phrases',
    component: PhraseHomeComponent,
    children: [
      {
        path: '',
        component: PhrasesListComponent,
        children: [
          {path: ':id', component: PhraseDetailComponent},
          {path: '', component: PhraseDetailComponent},
        ]
      }
    ]
  },
  /*{path: 'phrase/:id', component: PhraseDetailComponent}*/
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhrasesRoutingModule { }
