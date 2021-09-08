import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TicTacToeHomeComponent } from './shared/tic-tac-toe-home/tic-tac-toe-home.component';
import { TicTacToeSquareComponent } from './shared/tic-tac-toe-square/tic-tac-toe-square.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TicTacToeHomeComponent,
    TicTacToeSquareComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
