import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReactiveFormsModule } from '@angular/forms';

//firebase
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { environment } from 'src/environments/environment';

//views
import { HomeComponent } from './views/home/home.component';
import { ProfileComponent } from './views/profile/profile.component';
import { SearchComponent } from './views/search/search.component';
import { AddComponent } from './views/add/add.component';

//components
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomebarComponent } from './components/homebar/homebar.component';
import { ListComponent } from './list/list.component';
import { AddReviewComponent } from './views/add-review/add-review.component';
import { DetailComponent } from './views/detail/detail.component';
import { AboutComponent } from './views/about/about.component';
import { TosComponent } from './views/tos/tos.component';
import { EditComponent } from './views/edit/edit.component';
import { ButtonIconComponent } from './components/button-icon/button-icon.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ProfileComponent,
    SearchComponent,
    AddComponent,
    HomebarComponent,
    ListComponent,
    AddReviewComponent,
    DetailComponent,
    AboutComponent,
    TosComponent,
    EditComponent,
    ButtonIconComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
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
