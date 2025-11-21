import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { appConfig } from './app.config';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [],
  imports: [BrowserModule],
  providers: [
    ...appConfig.providers
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
