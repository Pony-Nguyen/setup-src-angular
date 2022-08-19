import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'src/app/components/home/home.component';
import { NewsComponent } from './news.component';

const routes: Routes = [
  {
    path: '',
    component: NewsComponent,
    children: [{ path: '', component: HomeComponent }],
    // canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewsLayoutRoutingModule {}
