import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnectionsComponent } from './connections/connections.component';
import { ProfilesComponent } from './profile/profiles.component';
import { ProfileComponent } from './profile/profile.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

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
  { path: '', redirectTo: '/connections', pathMatch: 'full' },
  {
    path: 'reporting',
    loadChildren: () =>
      import('./reporting/reporting.module').then((m) => m.ReportingModule),
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
