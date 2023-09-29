import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class DataDragonService {
    private readonly EXPIRY_DURATION = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
    private versionSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
    public version$: Observable<string> = this.versionSubject.asObservable();

    constructor(private http: HttpClient) {
        this.loadVersion();
    }

    private loadVersion(): void {
        const cachedVersion = localStorage.getItem('dataDragonVersion');
        const cachedVersionTimestamp = localStorage.getItem('dataDragonVersionTimestamp');

        const currentTime = new Date().getTime();
        if (cachedVersion && cachedVersionTimestamp && (currentTime - Number(cachedVersionTimestamp)) < this.EXPIRY_DURATION) {
            this.versionSubject.next(cachedVersion);
        } else {
            this.http.get<string[]>('https://ddragon.leagueoflegends.com/api/versions.json')
            .pipe(map(versions => versions[0]))
            .subscribe(version => {
                localStorage.setItem('dataDragonVersion', version);
                localStorage.setItem('dataDragonVersionTimestamp', currentTime.toString());
                this.versionSubject.next(version);
            });
        }
    }

    public getItemImageUrl(version: string, itemId: string): string {
        return `http://ddragon.leagueoflegends.com/cdn/${version.trim()}/img/item/${itemId}.png`;
    }
    
    public getSummonerSpellImageUrl(version: string, spellName: string): string {
        return `http://ddragon.leagueoflegends.com/cdn/${version.trim()}/img/spell/Summoner${spellName}.png`;
    }
}
