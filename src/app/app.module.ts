import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AdminModule } from './admin/admin.module';
import { DashboardModule } from './basic/dashboard.module';
import { SharedMaterialModule } from './common/common-material.module';
import { RouterModule } from '@angular/router';
import { PageNotFoundModule } from './common/pagenotfound/pagenotfound.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    RouterModule,
    AdminModule,
    DashboardModule,
    BrowserAnimationsModule,
    HttpClientModule,
    // HttpClientInMemoryWebApiModule.forRoot(
    //   LatestNewsDataServiceService, { dataEncapsulation: false }
    // ),
    SharedMaterialModule,
    PageNotFoundModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    console.log("AppModule Loaded.");
  }
}
