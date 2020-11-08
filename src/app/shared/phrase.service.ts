import { Injectable } from '@angular/core';
import {Phrase} from './phrase.class';
import {PHRASES} from './mock-data';
import {log} from 'util';

const phrasesPromice = Promise.resolve(PHRASES);

@Injectable({
  providedIn: 'root'
})
export class PhraseService {

  constructor() {
  }

  getAll(): Promise<Phrase[]> {
    return phrasesPromice;
  }

  getPhrase(id: number): Promise<Phrase> {
    return phrasesPromice.then(phrases => phrases.find(phrase => phrase.id === id));
  }

}
