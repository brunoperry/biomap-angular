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
import { Step1Component } from './site-add/steps/step1/step1.component';
import { Step2Component } from './site-add/steps/step2/step2.component';
import { Step3Component } from './site-add/steps/step3/step3.component';
import { Step4Component } from './site-add/steps/step4/step4.component';
import { Step5Component } from './site-add/steps/step5/step5.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { SiteMiniCardComponent } from './site-mini-card/site-mini-card.component';

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
  },
  {
    path: 'profile/:index',
    component: ProfileComponent
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
    SiteAddComponent,
    Step1Component,
    Step2Component,
    Step3Component,
    Step4Component,
    Step5Component,
    ProfileComponent,
    SiteMiniCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
