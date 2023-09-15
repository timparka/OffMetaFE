import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OffMetaDTO } from '../champion-stats-dto';
import { DataDragonService } from '../services/data-dragon.service';
import { ActivatedRoute } from '@angular/router';
import { ChampionStatsService } from '../services/champion-stats.service';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-champion-stats',
  templateUrl: './champion-stats.component.html',
  styleUrls: ['./champion-stats.component.css']
})
export class ChampionStatsComponent implements OnInit {
  selectedRole: string = ''; // This holds the selected role
  data?: OffMetaDTO;
  itemImageUrls: string[] = [];
  summonerSpell1ImageUrl?: string;
  summonerSpell2ImageUrl?: string;

  constructor(
    private cdr: ChangeDetectorRef,
    private route: ActivatedRoute,
    private championStatsService: ChampionStatsService,
    private router: Router,
    private dataDragonService: DataDragonService,
  ) {}
  
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params['selectedRole']) {
        Promise.resolve().then(() => {
          this.selectedRole = params['selectedRole'];
          console.log("Selected role in ChampionStats:", this.selectedRole);
          this.cdr.detectChanges();
        });
        this.dataDragonService.version$.subscribe(version => {
          this.updateImages(version);
        });
      }
    });
    

    this.data = this.championStatsService.getCurrentChampionData();
    console.log("Data after fetching:", this.data); 
  
    // Capitalize the first letter of the role name if it exists
    if (this.data && this.data.role) {
      this.data.role = this.data.role.charAt(0).toUpperCase() + this.data.role.slice(1);
    }
  
    // Sync with selectedRole if you'd like
    if (this.data && this.data.role) {
      this.selectedRole = this.data.role;
    }
  
    this.dataDragonService.version$.subscribe(version => {
      if (this.data) {
        this.itemImageUrls = this.data.items.map(itemName => 
          this.dataDragonService.getItemImageUrl(version, itemName)
        );
        this.summonerSpell1ImageUrl = this.dataDragonService.getSummonerSpellImageUrl(version, this.data.summonerSpell1);
        this.summonerSpell2ImageUrl = this.dataDragonService.getSummonerSpellImageUrl(version, this.data.summonerSpell2);
      }
    });
  }
  
  updateImages(version: string): void {
    if (this.data) {
      this.itemImageUrls = this.data.items.map(itemName => 
        this.dataDragonService.getItemImageUrl(version, itemName)
      );
      this.summonerSpell1ImageUrl = this.dataDragonService.getSummonerSpellImageUrl(version, this.data.summonerSpell1);
      this.summonerSpell2ImageUrl = this.dataDragonService.getSummonerSpellImageUrl(version, this.data.summonerSpell2);
    }
  }

  // This method sets the selected role
  selectRole(role: string) {
    this.selectedRole = role;
  }

  onRoleClick(role: string): void {
    this.championStatsService.getChampionStatsByRole(role).subscribe(data => {
      console.log('Data received:', data);
      this.data = data;
  
      if (this.data && this.data.role) {
        this.data.role = this.data.role.charAt(0).toUpperCase() + this.data.role.slice(1);
      }
  
      this.selectedRole = this.data.role;
      
      // Add this line to update the images when the role data changes.
      this.dataDragonService.version$.subscribe(version => {
        this.updateImages(version);
      });
  
      this.router.navigate(['/champion-stats'], { queryParams: { selectedRole: role } });
    });
  }
}
