import { Component, OnInit } from '@angular/core';
import {PhraseService} from '../../shared/phrase.service';
import {Phrase} from '../../shared/phrase.class';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {AuthService} from '../../shared/auth.service';

@Component({
  selector: 'app-phrase-detail',
  templateUrl: './phrase-detail.component.html',
  styleUrls: ['./phrase-detail.component.scss']
})
export class PhraseDetailComponent implements OnInit {

  phrase: Phrase;

  editValue: string;
  editLanguage: string;

  constructor(private svc: PhraseService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              public auth: AuthService) { }

  ngOnInit(): void {

    this.activatedRoute.data.subscribe((data: {phrase: Phrase}) => {
      this.phrase = data.phrase;
      this.editValue = this.phrase.value;
      this.editLanguage = this.phrase.language;
      // this.svc
      //  .getPhrase(+params.id)
      //  .then(res => {
      //    this.phrase = res;
      //    if (this.phrase) {
      //      this.editValue = this.phrase.value;
      //      this.editLanguage = this.phrase.language;
      //    }
      //  });
    });

  }

  goToPhrasesList(): void {
    const phraseID = this.phrase ? this.phrase.id : null;

    this.router.navigate(['../', {id: phraseID}], {relativeTo: this.activatedRoute});
  }

  isChanged(): boolean {
    return !(this.phrase.value === this.editValue && this.phrase.language === this.editLanguage);
  }

  save(): void {
    this.phrase.value = this.editValue;
    this.phrase.language = this.editLanguage;
  }

  canDeactivate(): Promise<boolean> | boolean {
    if (!this.phrase) {
      return true;
    }else if (!this.isChanged()) {
      return true;
    }

    return confirm('You not saved the changes. \nAll changes will be lost.\nGo without saving anyway?');

  }

}
