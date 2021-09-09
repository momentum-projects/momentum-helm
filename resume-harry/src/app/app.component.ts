import { Component } from '@angular/core';
import Profile, { profiles } from './models/profile.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'resume-harry';
  profiles: Profile[] = profiles;
}
