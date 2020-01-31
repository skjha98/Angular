import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { ProfileComponent } from './modules/profile/profile.component';
import { AssetsPageComponent } from './modules/assets-page/assets-page.component';
import { ParkingFormComponent } from './modules/parking-form/parking-form.component';
import { GymFormComponent } from './modules/gym-form/gym-form.component';


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
  },{
    path: 'parking_form',
    component: ParkingFormComponent
  },{
    path: 'gym_form',
    component: GymFormComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
