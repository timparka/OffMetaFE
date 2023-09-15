import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { ChampionStatsService } from '../services/champion-stats.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private championStatsService: ChampionStatsService, private router: Router) { }

  onRoleClick(role: string): void {
    this.championStatsService.getChampionStatsByRole(role).subscribe(data => {
      console.log('Data received:', data);
      const navigationExtras: NavigationExtras = {
        queryParams: { 'selectedRole': role }
      };
      this.router.navigate(['/champion-stats'], navigationExtras);
      console.log("Selected role in Home:", role);
    });
  }
  
  aboutClick(): void {
    this.router.navigate(['/about']);
  }
}
