import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
/*import {PhrasesListComponent} from './phrases/phrases-list/phrases-list.component';
import {PhraseDetailComponent} from './phrases/phrase-detail/phrase-detail.component';*/

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  /* {path: 'phrases', component: PhrasesListComponent},
  {path: 'phrase/:id', component: PhraseDetailComponent}, */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


