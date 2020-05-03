import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LatestNewsComponent } from './latest-news/latest-news.component';
import { PrecautionsComponent } from './precautions/precautions.component';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';

export const dashboardRoutes: Routes = [
    {
        path: '',
        component: DashboardComponent
    },
    {
        path: 'latest',
        component: LatestNewsComponent
    },
    {
        path: 'precautions',
        component: PrecautionsComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(dashboardRoutes),
        CommonModule
    ],
    exports: [RouterModule]
})

export class DashboardRoutingModule {
    constructor() {
        console.log("DashboardRoutingModule loaded.");
    }
}