import { Component, Input } from '@angular/core';
import { Profile } from '../../models/profile.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  @Input() profile!: Profile;
  @Input() name!: string;

  onAddExperience(experience: string) {
    this.profile.experience.push(experience);
  }
}
