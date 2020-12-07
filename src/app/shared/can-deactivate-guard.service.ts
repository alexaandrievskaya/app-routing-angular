import { Injectable } from '@angular/core';
import {CanDeactivate} from '@angular/router';
import {Observable} from 'rxjs';

export interface CanComponentDeactivate {
  canDeactivate: () => Promise<boolean> | boolean;
}

@Injectable({
  providedIn: 'root'
})
export class CanDeactivateGuardService implements CanDeactivate<CanComponentDeactivate>{

  canDeactivate(component: CanComponentDeactivate): Promise<boolean> | boolean {
    return component.canDeactivate ? component.canDeactivate() : true;
  }
}
