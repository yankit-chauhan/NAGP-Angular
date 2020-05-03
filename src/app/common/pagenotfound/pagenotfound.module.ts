import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SharedMaterialModule } from '../common-material.module';


@NgModule({
  declarations: [PageNotFoundComponent],
  imports: [
    CommonModule,
    SharedMaterialModule
  ],
  exports: [
    PageNotFoundComponent
  ]
})
export class PageNotFoundModule { 
  constructor() {
    console.log("PageNotFoundModule loaded.");
  }
}
