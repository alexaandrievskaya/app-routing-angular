import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {delay, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn = false;
  resirectUrl: string;

  constructor() { }

  login(login: string, password: string): Observable<boolean> {

    const result = of(true).pipe(delay(2000));

    return result.pipe(
      map ((val: boolean) => login === 'admin' && password === '123' ? this.isLoggedIn = val : false)
    );

    /*return new Promise(resolve => {
      setTimeout(() => {
        if (login === 'admin' && password === '123') {
          this.isLoggedIn = true;
          resolve(this.isLoggedIn);
        }else{
          this.isLoggedIn = false;
          resolve(this.isLoggedIn);
        }
      }, 2000);
    });*/
  }
}
