import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OriginalComponent } from './components/original/original.component';
import { SignalComponent } from './components/signal/signal.component';

@NgModule({
  declarations: [
    AppComponent,
    OriginalComponent,
    SignalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
