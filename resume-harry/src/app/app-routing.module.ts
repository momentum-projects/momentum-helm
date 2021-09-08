import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TicTacToeHomeComponent } from './shared/tic-tac-toe-home/tic-tac-toe-home.component';

const routes: Routes = [{ path: '**', component: TicTacToeHomeComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
