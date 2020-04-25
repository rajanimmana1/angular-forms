import { Injectable } from '@angular/core';
import { UserSettings } from '../data/userSettings';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn : 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  postUserSettings(userSettings:UserSettings): Observable<any>{

    this.http.post('url',userSettings)
    //return of(userSettings);
  }
}