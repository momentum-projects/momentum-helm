import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Profile, ProfileService } from '../services/profile.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  constructor(
    public profileService: ProfileService,
    private route: ActivatedRoute
  ) {}

  profile!: number;

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.profile = parseInt(params['id']);
    });
  }

  get profileObject() {
    return this.profileService.getProfile(this.profile);
  }
}
