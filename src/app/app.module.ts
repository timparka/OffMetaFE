import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'; // Add HTTP_INTERCEPTORS
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ChampionStatsComponent } from './champion-stats/champion-stats.component';
import { AppRoutingModule } from './app-routing.module'; // Keep this import
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NavbarComponent } from './navbar/navbar.component';
import { PatchComponent } from './patch/patch.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { LoadingInterceptor } from './loading.interceptor'; // Import your interceptor

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChampionStatsComponent,
    AboutComponent,
    FooterComponent,
    NavbarComponent,
    PatchComponent,
    SpinnerComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule, // Keep this import
    NgxSpinnerModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true // Add your interceptor here
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
