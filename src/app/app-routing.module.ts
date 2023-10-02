import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ChampionStatsComponent } from './champion-stats/champion-stats.component';
import { AboutComponent } from './about/about.component';
import { PatchComponent } from './patch/patch.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'champion-stats', component: ChampionStatsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'patch', component: PatchComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}]
})
export class AppRoutingModule { }