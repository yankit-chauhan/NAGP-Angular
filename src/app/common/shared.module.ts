import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button'; 
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select'; 
import { MatTabsModule } from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTableModule } from '@angular/material/table';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatExpansionModule} from '@angular/material/expansion';

import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { MatDividerModule } from '@angular/material/divider';
import { MatRippleModule } from '@angular/material/core';
import { CommonModule } from '@angular/common';


/**
 * NgModule decorator that holds all the imported modules.
 * It also exports the modules for other modules to use them.
 */
@NgModule({
  declarations: [HeaderComponent],
  imports: [
    MatDividerModule,
    MatRippleModule,
    MatSnackBarModule,
    MatExpansionModule,
    MatTableModule,
    MatListModule,
    RouterModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatButtonModule,
    CommonModule,
    MatCardModule,
    MatInputModule,
    MatTabsModule,
    MatToolbarModule,
    MatIconModule,
    MatSelectModule,
    MatGridListModule
  ],
  exports: [
    MatDividerModule,
    MatRippleModule,
    MatSnackBarModule,
    MatExpansionModule,
    MatTableModule,
    MatListModule,
    RouterModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatTabsModule,
    MatToolbarModule,
    MatIconModule,
    MatSelectModule,
    HeaderComponent,
    MatGridListModule
  ]
})

/**
 * This is the class that will be imported wherever needed.
 */
export class SharedMaterialModule {
  constructor() {
    console.log("SharedMaterialModule loaded.");
  }
 }