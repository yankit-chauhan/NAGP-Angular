import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { dashboardRoutes } from './basic/dashboard-routing.module';
import { adminRoutes } from './admin/admin-routing.module';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './common/pagenotfound/page-not-found/page-not-found.component';
import { DashboardCanActivateGuard } from './admin/dashboard/dashboard-can-activate.guard';
import { LoginCanActivateGuard } from './admin/admin-login/login-can-activate.guard';


export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    children: [...dashboardRoutes]
  },
  {
    path: 'login',
    component: AdminLoginComponent,
    canActivate: [LoginCanActivateGuard]
  },
  {
    path: 'admindashboard',
    children: [...adminRoutes],
    canActivate: [DashboardCanActivateGuard]
  },
  {
    path: '**',
    component: PageNotFoundComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor() {
    console.log("AppRoutingModule Loaded.");
  }
}
