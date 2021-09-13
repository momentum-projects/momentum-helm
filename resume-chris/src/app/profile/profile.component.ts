import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfilesService } from '../profiles.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  @Input() name!: string;
  @Input() editable!: boolean;

  profile!: number;

  constructor(
    public profilesService: ProfilesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.profile = parseInt(params['id']);
    });
  }

  get profileObject() {
    return this.profilesService.getProfile(this.profile);
  }
}
