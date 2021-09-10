import { Component, OnInit } from '@angular/core';
import _ from 'lodash';
import { Profile, ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-profile-home',
  templateUrl: './profile-home.component.html',
  styleUrls: ['./profile-home.component.scss']
})
export class ProfileHomeComponent implements OnInit {
  title = 'resume-harry';
  profiles: Profile[] = [];
  currentUserId = 0;

  constructor(public profilesService: ProfileService) {}

  ngOnInit() {
    this.profiles = this.profilesService.profiles;
  }

  activeUser() {
    return _.find(this.profiles, 'isActive');
  }

  setActiveUser(userId: number) {
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

  alterConnection(connectionEventId: number) {
    this.profiles = _.reduce(
      this.profiles,
      (updatedProfiles: Profile[], profileInstance: Profile) => {
        if (
          profileInstance.userId === this.currentUserId &&
          !profileInstance.connections.includes(connectionEventId)
        ) {
          profileInstance.connections.push(connectionEventId);
          updatedProfiles.push(profileInstance);
        } else if (
          profileInstance.userId === connectionEventId &&
          !profileInstance.connections.includes(this.currentUserId)
        ) {
          profileInstance.connections.push(this.currentUserId);
          updatedProfiles.push(profileInstance);
        } else if (
          profileInstance.userId === this.currentUserId &&
          profileInstance.connections.includes(connectionEventId)
        ) {
          profileInstance.connections = profileInstance.connections.filter(
            (item) => {
              return item !== connectionEventId;
            }
          );
          updatedProfiles.push(profileInstance);
        } else if (
          profileInstance.userId === connectionEventId &&
          profileInstance.connections.includes(this.currentUserId)
        ) {
          profileInstance.connections = profileInstance.connections.filter(
            (item) => {
              return item !== this.currentUserId;
            }
          );
          updatedProfiles.push(profileInstance);
        } else {
          updatedProfiles.push(profileInstance);
        }
        return updatedProfiles;
      },
      []
    );
  }
}
