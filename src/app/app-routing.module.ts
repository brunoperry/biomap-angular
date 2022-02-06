import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './views/about/about.component';
import { AddReviewComponent } from './views/add-review/add-review.component';
import { AddComponent } from './views/add/add.component';
import { DetailComponent } from './views/detail/detail.component';
import { EditComponent } from './views/edit/edit.component';
import { HomeComponent } from './views/home/home.component';
import { ProfileComponent } from './views/profile/profile.component';
import { SearchComponent } from './views/search/search.component';
import { TosComponent } from './views/tos/tos.component';

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
  {
    path: 'edit:index',
    component: EditComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'add-review',
    component: AddReviewComponent,
  },
  {
    path: 'detail',
    component: DetailComponent,
  },
  {
    path: 'tos',
    component: TosComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
