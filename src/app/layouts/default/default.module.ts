import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { ProfileComponent } from 'src/app/modules/profile/profile.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatSidenavModule, MatDividerModule, MatIconModule } from '@angular/material'
import { AssetsPageComponent } from 'src/app/modules/assets-page/assets-page.component';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    ProfileComponent,
    AssetsPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    MatCardModule,
    MatIconModule
  ]
})
export class DefaultModule { }
