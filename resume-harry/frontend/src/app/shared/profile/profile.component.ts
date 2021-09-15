import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Profile, ProfileService } from '../services/profile.service';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from '../services/login.service';
import { NgForm } from '@angular/forms';

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
  currentUserFirstName = '';
  currentUserLastName = '';

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.profile = parseInt(params['id']);
    });
  }

  get profileObject() {
    return this.profileService.getProfile(this.profile);
  }

  get currentUserProfile() {
    let currentUserId = localStorage.getItem('USER') || '';
    let currentUserProfile = this.profileService.getProfile(
      parseInt(currentUserId.toString())
    );
    if (currentUserProfile) {
      this.currentUserFirstName = currentUserProfile.firstName;
      this.currentUserLastName = currentUserProfile.lastName;
    }
    return currentUserProfile;
  }

  currentUserProfileUpdate() {
    this.profileService.save();
  }
}
