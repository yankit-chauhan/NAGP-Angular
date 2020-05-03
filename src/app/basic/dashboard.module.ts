import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LatestNewsComponent } from './latest-news/latest-news.component';
import { PrecautionsComponent } from './precautions/precautions.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardService } from '../services/dashboard.service';
import { RouterModule } from '@angular/router';
import { SharedMaterialModule } from '../common/shared.module';



@NgModule({
  declarations: [
    DashboardComponent,
    LatestNewsComponent,
    PrecautionsComponent
  ],
  imports: [
    DashboardRoutingModule,
    CommonModule,
    RouterModule,
    SharedMaterialModule
  ],
  exports: [
    DashboardRoutingModule,
    DashboardComponent,
    RouterModule,
    LatestNewsComponent,
    PrecautionsComponent,
    SharedMaterialModule
  ],
  providers: [DashboardService]
})
export class DashboardModule { 
  constructor() {
    console.log("DashboardModule loaded.");
  }
}
