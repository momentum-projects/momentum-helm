import { Component, OnInit } from '@angular/core';
import Profile, { profiles } from './profile.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  profiles: Profile[] = profiles;
  firstProfile() {
    return this.profiles[0];
  }

  get firstProfileGet() {
    return this.firstProfile();
  }
  set firstProfileSet(value: string) {
    this.firstProfile().firstName = value;
  }
  onClick() {
    this.firstProfileSet = 'Atul';
  }

  onConsoleLog(x) {
    console.log(x);
  }
}
