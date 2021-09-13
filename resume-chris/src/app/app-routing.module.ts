import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnectionsComponent } from './connections/connections.component';
import { ProfilesComponent } from './profile/profiles.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path: 'profiles',
    component: ProfilesComponent,
    children: [
      {
        path: ':id',
        component: ProfileComponent,
      },
    ],
  },
  { path: 'connections', component: ConnectionsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
