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
import { ReviewAddComponent } from './review-add/review-add.component';
import { SettingsComponent } from './settings/settings.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { AboutComponent } from './about/about.component';
import { LogoutComponent } from './logout/logout.component';
import { LangButtonComponent } from './lang-button/lang-button.component';
import { SiteEditComponent } from './site-edit/site-edit.component';

//firebase
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore, connectFirestoreEmulator, enableIndexedDbPersistence } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { environment } from 'src/environments/environment';
import { StepsControllerComponent } from './components/steps-controller/steps-controller.component';

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
    path: 'site-edit/:index',
    component: SiteEditComponent
  },
  {
    path: 'site-edit',
    component: SiteEditComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'profile/:index',
    component: ProfileComponent
  },
  {
    path: 'review-add/:index',
    component: ReviewAddComponent
  },
  {
    path: 'settings',
    component: SettingsComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'logout',
    component: LogoutComponent
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
    SiteMiniCardComponent,
    ReviewAddComponent,
    SettingsComponent,
    CheckboxComponent,
    AboutComponent,
    LogoutComponent,
    LangButtonComponent,
    SiteEditComponent,
    StepsControllerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ReactiveFormsModule,
    [
        provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
        provideFirestore(() => getFirestore()),
        provideStorage(() => getStorage())
    ]
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
