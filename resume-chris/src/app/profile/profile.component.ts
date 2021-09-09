import { Component, OnInit, Input } from '@angular/core';
import Profile from '../profile.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  @Input() profile!: Profile;
  @Input() profiles: Profile[];
  @Input() name!: string;

  onNewExperience(experience: string) {
    this.profile.experience.push(experience);
  }

  onNewConnection(connection: number) {
    this.profile.connection.add(connection);
  }
}
