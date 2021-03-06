import { Component, OnInit } from '@angular/core';
import {PhraseService} from '../../shared/phrase.service';
import {Phrase} from '../../shared/phrase.class';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-phrase-detail',
  templateUrl: './phrase-detail.component.html',
  styleUrls: ['./phrase-detail.component.scss']
})
export class PhraseDetailComponent implements OnInit {

  phrase: Phrase;

  constructor(private svc: PhraseService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe((params: Params) => {
      this.svc
        .getPhrase(+params.id)
        .then(res => this.phrase = res);
    });

  }

  goToPhrasesList(): void {
    const phraseID = this.phrase ? this.phrase.id : null;

    this.router.navigate(['/phrases', {id: phraseID}]);
  }

}
