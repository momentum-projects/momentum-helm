import {
  ElementRef,
  Component,
  ContentChild,
  Input,
  OnInit,
  AfterContentInit,
} from '@angular/core';
import { ProfilesService } from '../profiles.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent implements OnInit, AfterContentInit {
  @Input() profile!: number;

  @ContentChild('morestuff') morestuff!: ElementRef;

  newExperience: string = '';

  constructor(public profilesService: ProfilesService) {}

  ngOnInit() {
    console.log(' ng on init');
    console.log(this.morestuff);
  }

  ngAfterContentInit() {
    console.log(' ng after content init');
    console.log(this.morestuff);
  }

  get experience() {
    return this.profilesService.getProfile(this.profile).experience;
  }

  onNewExperience() {
    this.profilesService.addExperience(this.profile, this.newExperience);
  }
}
