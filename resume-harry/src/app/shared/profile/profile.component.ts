import { Component, Input } from '@angular/core';
import { Profile } from '../../models/profile.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  @Input() profiles!: Profile;
  @Input() name!: string;

  constructor() {}
}
