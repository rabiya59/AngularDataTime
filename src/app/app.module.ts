import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentDateComponent } from './parent-date/parent-date.component';
import { EnfantDateComponent } from './enfant-date/enfant-date.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentDateComponent,
    EnfantDateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
