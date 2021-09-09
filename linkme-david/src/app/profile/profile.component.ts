import { Component, Input, SimpleChanges, OnDestroy } from '@angular/core';
import { ProfilesService } from '../profiles.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  @Input() profile!: number;
  @Input() name!: string;

  githubToken = environment.githubToken;

  constructor(public profilesService: ProfilesService) {}

  get profileObject() {
    return this.profilesService.getProfile(this.profile);
  }

  get repositories() {

  }
}