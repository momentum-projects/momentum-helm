import { Component } from '@angular/core';
import { Profile, profiles } from './models/profile.model';
import * as _ from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'resume-harry';
  profiles: Profile[] = profiles;
  currentUserId!: number;

  activeUser() {
    return _.find(this.profiles, 'isActive');
  }

  setActiveUser(userId: number) {
    console.log(userId);
    this.profiles = _.reduce(
      this.profiles,
      (updatedProfiles: Profile[], profileInstance: Profile) => {
        if (profileInstance.userId === userId) {
          profileInstance.isActive = true;
          updatedProfiles.push(profileInstance);
        } else {
          updatedProfiles.push(profileInstance);
        }
        return updatedProfiles;
      },
      []
    );
    this.currentUserId = userId;
  }
}
