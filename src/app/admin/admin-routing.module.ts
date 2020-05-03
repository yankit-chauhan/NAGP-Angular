import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddNewsComponent } from './add-news/add-news.component';
import { AdminDashboardComponent } from './dashboard/admin-dashboard.component';

export const adminRoutes: Routes = [
  {
    path: '',
    component: AdminDashboardComponent
  },
  { 
    path: 'addNews',
    component: AddNewsComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes),
    CommonModule
  ],
  exports: [RouterModule]
})

export class AdminRoutingModule {
  constructor() {
    console.log("AdminRoutingModule loaded.");
  }
}