import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  getPrivateData(): Observable<string> {
    return this.http.get<string>('/api/private');
  }

  getPublicData(): Observable<string> {
    return this.http.get<string>('/api/public');
  }
}


