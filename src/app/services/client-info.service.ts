import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http'

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};

@Injectable({
  providedIn: 'root'
})
export class ClientInfoService {

  constructor(private http: HttpClient) { }
  
  url = 'https://ipgeolocation.abstractapi.com/v1/?api_key=25971bde8c4c4cd881f72ed94a9cae12'

  infoJson(): Observable<Object> {
    return this.http.get(this.url)
  }

}
