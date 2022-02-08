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
import { DetailComponent } from './views/detail/detail.component';
import { AboutComponent } from './views/about/about.component';
import { TosComponent } from './views/tos/tos.component';
import { EditComponent } from './views/edit/edit.component';
import { AddReviewComponent } from './views/add-review/add-review.component';

//components
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomebarComponent } from './components/homebar/homebar.component';
import { ButtonIconComponent } from './components/button-icon/button-icon.component';
import { SiteCardComponent } from './components/site-card/site-card.component';
import { RatingComponent } from './components/rating/rating.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { MapComponent } from './components/map/map.component';
import { ListComponent } from './components/list/list.component';
import { OverlayComponent } from './components/overlay/overlay.component';
import { ButtonToggleComponent } from './components/button-toggle/button-toggle.component';
import { LabelIconComponent } from './components/label-icon/label-icon.component';
import { SvgComponent } from './components/svg/svg.component';
import { ButtonTypeComponent } from './components/button-type/button-type.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ProfileComponent,
    SearchComponent,
    AddComponent,
    HomebarComponent,
    AddReviewComponent,
    DetailComponent,
    AboutComponent,
    TosComponent,
    EditComponent,
    ButtonIconComponent,
    SiteCardComponent,
    RatingComponent,
    GalleryComponent,
    MapComponent,
    ListComponent,
    OverlayComponent,
    ButtonToggleComponent,
    LabelIconComponent,
    SvgComponent,
    ButtonTypeComponent,
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
