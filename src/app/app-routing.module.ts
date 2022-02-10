import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './views/about/about.component';
import { AddReviewComponent } from './views/add-review/add-review.component';
import { AddComponent } from './views/add/add.component';
import { DetailComponent } from './views/detail/detail.component';
import { EditComponent } from './views/edit/edit.component';
import { HomeComponent } from './views/home/home.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
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
    data: { animation: 'add' },
  },
  {
    path: 'profile',
    component: ProfileComponent,
    data: { animation: 'profile' },
  },
  {
    path: 'edit/:id',
    component: EditComponent,
    data: { animation: 'edit' },
  },
  {
    path: 'about',
    component: AboutComponent,
    data: { animation: 'about' },
  },
  {
    path: 'add-review/:id',
    component: AddReviewComponent,
    data: { animation: 'add-review' },
  },
  {
    path: 'detail/:id',
    component: DetailComponent,
    data: { animation: 'detail' },
  },
  {
    path: 'tos',
    component: TosComponent,
    data: { animation: 'tos' },
  },
  {
    path: '**',
    component: NotFoundComponent,
    data: { animation: 'not-found' },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
