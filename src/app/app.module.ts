import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ChampionStatsComponent } from './champion-stats/champion-stats.component';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NavbarComponent } from './navbar/navbar.component';
import { PatchComponent } from './patch/patch.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'champion-stats', component: ChampionStatsComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChampionStatsComponent,
    AboutComponent,
    FooterComponent,
    NavbarComponent,
    PatchComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgxSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
