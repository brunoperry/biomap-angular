import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SiteListComponent } from './site-list/site-list.component';
import { SiteCardComponent } from './components/site-card/site-card.component';
import { RateComponent } from './components/rate/rate.component';
import { MenuComponent } from './components/menu/menu.component';
import { RouterModule, Routes } from '@angular/router';
import { SiteDetailComponent } from './site-detail/site-detail.component';
import { ReviewCardComponent } from './components/review-card/review-card.component';
import { SiteMapComponent } from './components/site-map/site-map.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { SiteMiniCardComponent } from './components/site-mini-card/site-mini-card.component';
import { ReviewAddComponent } from './review-add/review-add.component';
import { SettingsComponent } from './settings/settings.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { AboutComponent } from './about/about.component';
import { LogoutComponent } from './logout/logout.component';
import { LangButtonComponent } from './components/lang-button/lang-button.component';
import { SiteEditComponent } from './site-edit/site-edit.component';

//firebase
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore, connectFirestoreEmulator, enableIndexedDbPersistence } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { environment } from 'src/environments/environment';
import { GalleryComponent } from './components/gallery/gallery.component';

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
    ProfileComponent,
    ReviewAddComponent,
    SettingsComponent,
    CheckboxComponent,
    AboutComponent,
    LogoutComponent,
    LangButtonComponent,
    SiteEditComponent,
    SiteMiniCardComponent,
    GalleryComponent
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
