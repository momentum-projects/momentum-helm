import { Component, OnInit } from '@angular/core';
import { ProfilesService } from './profiles.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(public profilesService: ProfilesService) {}

  title = 'linkme-chris';
}
