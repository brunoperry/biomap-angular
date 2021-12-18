import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SiteListComponent } from './site-list/site-list.component';
import { SiteCardComponent } from './site-card/site-card.component';
import { RateComponent } from './rate/rate.component';
import { MenuComponent } from './menu/menu.component';
import { RouterModule, Routes } from '@angular/router';
import { SiteDetailComponent } from './site-detail/site-detail.component';
import { ReviewCardComponent } from './review-card/review-card.component';
import { SiteMapComponent } from './site-map/site-map.component';
import { SiteAddComponent } from './site-add/site-add.component';

const routes:Routes = [
  {
    path: '',
    redirectTo: '/site-list',
    pathMatch: 'full'
  },
  {
    path: 'site-list',
    component: SiteListComponent
  },
  {
    path: 'site-detail/:index',
    component: SiteDetailComponent
  },
  {
    path: 'site-add',
    component: SiteAddComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SiteListComponent,
    SiteCardComponent,
    RateComponent,
    MenuComponent,
    SiteDetailComponent,
    ReviewCardComponent,
    SiteMapComponent,
    SiteAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
