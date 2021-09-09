import { Component, OnInit } from '@angular/core';
import Profile, { profiles } from './profile.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  profiles: Profile[] = profiles;
  title = 'linkme-chris';
}
