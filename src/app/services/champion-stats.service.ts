import { Injectable } from '@angular/core';
import { OffMetaDTO } from '../champion-stats-dto';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ChampionStatsService {
  private apiUrl = 'http://3.88.117.135:8080/api/participant';
  private championData?: OffMetaDTO;

  constructor(private http: HttpClient) { }

  getChampionStatsByRole(role: string): Observable<OffMetaDTO> {
    return this.http.get<OffMetaDTO>(`${this.apiUrl}/${role}`)
      .pipe(
        tap(data => this.championData = data)  // Store the data in the service
      );
  }

  getCurrentChampionData(): OffMetaDTO | undefined {
    return this.championData;
  }
}

