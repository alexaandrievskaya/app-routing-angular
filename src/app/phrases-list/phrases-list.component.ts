import { Component, OnInit } from '@angular/core';
import {PhraseService} from '../shared/phrase.service';
import {Phrase} from '../shared/phrase.class';
import {Router} from '@angular/router';

@Component({
  selector: 'app-phrases-list',
  templateUrl: './phrases-list.component.html',
  styleUrls: ['./phrases-list.component.scss']
})
export class PhrasesListComponent implements OnInit {

  phrases: Phrase[];

  constructor(private svc: PhraseService, private router: Router) { }

  ngOnInit(): void {
    this.svc.getAll().then(res => this.phrases = res);
  }

  onSelect(selected: Phrase): void {
    this.router.navigate(['phrase', selected.id]);
  }

}
