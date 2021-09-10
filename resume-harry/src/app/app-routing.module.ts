import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogInComponent } from './shared/log-in/log-in.component';
import { ProfileHomeComponent } from './shared/profile-home/profile-home.component';

const routes: Routes = [
  { path: 'home', component: ProfileHomeComponent },
  { path: 'login', component: LogInComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
