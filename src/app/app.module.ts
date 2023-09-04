import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import { LoadingModule } from './admissao-cooperado/pages/components/loading/loading.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LoadingModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
