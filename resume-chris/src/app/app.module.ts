import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Tictactoe2Component } from './tictactoe2/tictactoe2.component';
import { Tictactoe1Component } from './tictactoe1/tictactoe1.component';

@NgModule({
  declarations: [AppComponent, Tictactoe2Component, Tictactoe1Component],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
