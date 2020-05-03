import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddNewsComponent } from './add-news/add-news.component';

export const adminRoutes: Routes = [
  { path: 'addNews', component: AddNewsComponent }
];

@NgModule({
  declarations: [],
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