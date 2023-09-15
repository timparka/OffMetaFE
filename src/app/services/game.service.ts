// game.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private http: HttpClient) { }

  getCurrentPatch(): Observable<string> {
    return this.http.get<string>('http://3.88.117.135:8080/api/user/currentPatch', { responseType: 'text' as 'json' });
  }

}
