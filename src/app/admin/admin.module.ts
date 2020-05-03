import { NgModule } from '@angular/core';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedMaterialModule } from '../common/shared.module';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './dashboard/admin-dashboard.component';
import { AddNewsComponent } from './add-news/add-news.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AdminLoginComponent,
    AdminDashboardComponent,
    AddNewsComponent
  ],
  imports: [
    AdminRoutingModule,
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    SharedMaterialModule
  ],
  exports: [
    AdminRoutingModule,
    AdminLoginComponent,
    RouterModule,
    SharedMaterialModule,
    AdminDashboardComponent
  ],
  bootstrap: [AdminLoginComponent]
})
export class AdminModule {
  constructor() {
    console.log("AdminModule loaded.");
  }
}
