import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LatestNewsComponent } from './latest-news/latest-news.component';
import { PrecautionsComponent } from './precautions/precautions.component';
import { CommonModule } from '@angular/common';

export const dashboardRoutes: Routes = [
    { path: 'latest', component: LatestNewsComponent },
    { path: 'precautions', component: PrecautionsComponent }
];

@NgModule({
    declarations: [],
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