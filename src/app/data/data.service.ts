import { Injectable } from '@angular/core';
import { UserSettings } from './userSettings';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn : 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  getSubscriptionTypes():Observable<string[]>{
    return of(['monthly','yearly','lifetime']);
  }

  postUserSettings(userSettings:UserSettings): Observable<any>{

   return this.http.post('https://putsreq.com/OErLV91uZtonb2TtJjIX',userSettings);
    //return of(userSettings);
  }
}