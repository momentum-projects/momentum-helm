import { Component, OnInit, Input } from '@angular/core';
import { ProfilesService } from '../profiles.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  @Input() profile!: Profile;
  @Input() profiles: Profile[];
  @Input() name!: string;
  profilesService: ProfilesService;

  constructor() {
    this.profilesService = new ProfilesService();
  }

  onNewExperience(experience: string) {
    this.profile.experience.push(experience);
    this.profilesService.addExperience(this.profile, experience)
  }

  onNewConnection(connection: number) {
    this.profile.connection.add(connection);
  }
}
