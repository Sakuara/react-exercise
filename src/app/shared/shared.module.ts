import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NzButtonModule } from "ng-zorro-antd/button";

const MODULES = [
  FormsModule,
  ReactiveFormsModule,
  BrowserModule,
  BrowserAnimationsModule,
  HttpClientModule,
  RouterModule,
];
const ThirdLibraryModule = [
    NzButtonModule
];
const COMPONENTS = [
  
];
const PIPES = [
  
];


@NgModule({
  declarations: [...COMPONENTS, ...PIPES],
  imports: [
    ...MODULES,
    ...ThirdLibraryModule,
  ],
  exports: [
    ...MODULES,
    ...ThirdLibraryModule,
    ...COMPONENTS,
    ...PIPES,
  ]
})
export class SharedModule { }