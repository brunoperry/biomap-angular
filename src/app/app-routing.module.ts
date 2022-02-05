import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './views/add/add.component';
import { HomeComponent } from './views/home/home.component';
import { ProfileComponent } from './views/profile/profile.component';
import { SearchComponent } from './views/search/search.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
    data: { animation: 'home' },
  },
  {
    path: 'search',
    component: SearchComponent,
    data: { animation: 'search' },
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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
