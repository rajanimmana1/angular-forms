import { Injectable } from '@angular/core';
import { UserSettings } from './userSettings';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn : 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  postUserSettings(userSettings:UserSettings): Observable<any>{

   return this.http.post('https://putsreq.com/OErLV91uZtonb2TtJjIX',userSettings);
    //return of(userSettings);
  }
}