import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './shared/login/login.component';
import { ProfileHomeComponent } from './shared/profile-home/profile-home.component';
import { AuthGuard } from './auth/auth.guard';
import { ProfileComponent } from './shared/profile/profile.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'home',
    component: ProfileHomeComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: ':id',
        component: ProfileComponent,
      },
    ],
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
