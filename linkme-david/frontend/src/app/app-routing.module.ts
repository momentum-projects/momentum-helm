import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnectionsComponent } from './connections/connections.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfilesComponent } from './profile/profiles.component';

const routes: Routes = [
  {
    path: 'profiles',
    component: ProfilesComponent, // this is the component with the <router-outlet> in the template
    children: [
      {
        path: ':id', // child route path matches url like http://localhost:4200/profiles/4 (via params)
        component: ProfileComponent, // child route component that the router renders
      },
      // {
      //   path: 'single', // child route path matches url like http://localhost:4200/profiles/single?id=4 (via queryParams)
      //   component: ProfileComponent, // child route component that the router renders
      // },
    ],
  },
  {
    path: 'connections',
    component: ConnectionsComponent,
  },
  {
    path: '',
    redirectTo: '/connections',
    pathMatch: 'full',
  },
  {
    path: 'reporting',
    loadChildren: () =>
      import('./reporting/reporting.module').then((m) => m.ReportingModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
