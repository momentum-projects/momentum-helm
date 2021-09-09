import { Component, OnInit, Input } from '@angular/core';
import Profile from '../profile.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  @Input() profile!: Profile;
  @Input() name!: string;

  constructor() { }

  ngOnInit(): void {
  }

  onNewExperience(experience: string) {
    this.profile.experience.push(experience)
  }

}
