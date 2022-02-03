import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RouterModule, Routes } from '@angular/router';

import { ReactiveFormsModule } from '@angular/forms';

//firebase
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { environment } from 'src/environments/environment';
import { HomeComponent } from './views/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProfileComponent } from './views/profile/profile.component';
import { SearchComponent } from './views/search/search.component';
import { AddComponent } from './views/add/add.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'search',
    component: SearchComponent,
  },
  {
    path: 'add',
    component: AddComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  // {
  //   path: 'site-edit/:index',
  //   component: SiteEditComponent,
  // },
  // {
  //   path: 'site-edit',
  //   component: SiteEditComponent,
  // },
  // {
  //   path: 'profile',
  //   component: ProfileComponent,
  // },
  // {
  //   path: 'profile/:index',
  //   component: ProfileComponent,
  // },
  // {
  //   path: 'review-add/:index',
  //   component: ReviewAddComponent,
  // },
  // {
  //   path: 'settings',
  //   component: SettingsComponent,
  // },
  // {
  //   path: 'about',
  //   component: AboutComponent,
  // },
  // {
  //   path: 'logout',
  //   component: LogoutComponent,
  // },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ProfileComponent,
    SearchComponent,
    AddComponent,
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
      provideStorage(() => getStorage()),
    ],
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
