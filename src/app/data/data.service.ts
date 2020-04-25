import { Injectable } from '@angular/core';
import { UserSettings } from '../data/userSettings';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn : 'root'
})
export class DataService {

  constructor() { }

  postUserSettings(userSettings:UserSettings): Observable<UserSettings>{
    return of(userSettings);
  }
}