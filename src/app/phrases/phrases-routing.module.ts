import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PhrasesListComponent} from './phrases-list/phrases-list.component';
import {PhraseDetailComponent} from './phrase-detail/phrase-detail.component';
import {CanDeactivateGuardService} from '../shared/can-deactivate-guard.service';

const routes: Routes = [
  {path: 'phrases', component: PhrasesListComponent},
  {
    path: 'phrases/:id',
    component: PhraseDetailComponent,
    canDeactivate: [CanDeactivateGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhrasesRoutingModule { }
