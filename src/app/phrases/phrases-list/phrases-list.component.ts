import { Component, OnInit } from '@angular/core';
import {PhraseService} from '../../shared/phrase.service';
import {Phrase} from '../../shared/phrase.class';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-phrases-list',
  templateUrl: './phrases-list.component.html',
  styleUrls: ['./phrases-list.component.scss']
})
export class PhrasesListComponent implements OnInit {

  phrases: Phrase[];
  selectedID: number;

  constructor(private svc: PhraseService, private router: Router, private activatedRout: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRout.params.subscribe(() => {

      this.svc
        .getAll()
        .then(res => this.phrases = res);
    });
  }

  isSelected(id: number): boolean {
    return this.selectedID === id;
  }

  onSelect(selected: Phrase): void {
    this.selectedID = selected.id;
    this.router.navigate(['phrases', selected.id]);
  }

}

