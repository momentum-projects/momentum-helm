import { Component, OnInit } from '@angular/core';
import Profile, { profiles } from './profile.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'resume-chris';
  profiles: Profile[] = profiles;

  ngOnInit() {
    setTimeout( () => {
      this.profiles[0].firstName = 'bob';
      this.profiles[1].firstName = 'Thomans';
    }, 1000);
  }

  firstProfile() {
    return this.profiles[0];
  }
}



