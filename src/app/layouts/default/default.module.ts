import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { ProfileComponent } from 'src/app/modules/profile/profile.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatSidenavModule, MatDividerModule, MatIconModule, MatListModule, MatTableModule, MatFormFieldModule, MatInputModule, MatButtonModule } from '@angular/material'
import { AssetsPageComponent } from 'src/app/modules/assets-page/assets-page.component';
import { MatCardModule } from '@angular/material/card';
import { DataTableComponent } from 'src/app/modules/dashboard/data-table/data-table.component';

@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    ProfileComponent,
    AssetsPageComponent,
    DataTableComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class DefaultModule { }
