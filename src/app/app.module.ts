import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import {ApiService} from './api.service'
import {AutoFocus} from './auto-focus.directive'

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule,HttpClientModule],
  declarations: [ AppComponent, HelloComponent,AutoFocus ],
  bootstrap:    [ AppComponent ],
  providers:[ApiService]
})
export class AppModule { }
