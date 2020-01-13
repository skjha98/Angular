import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { ProfileComponent } from './modules/profile/profile.component';
import { AssetsPageComponent } from './modules/assets-page/assets-page.component';


const routes: Routes = [{
  path: '',
  component: DefaultComponent,
  children: [{
    path: '',
    component: DashboardComponent
  },{
    path: 'profile',
    component: ProfileComponent
  },{
    path: 'assets',
    component: AssetsPageComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
