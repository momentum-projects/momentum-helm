import { Component, Input } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent {
  @Input() profile!: number;
  newExperience = '';
  repositories!: Repository[];
  avatarUrl?: string;

  constructor(
    public profileService: ProfileService,
    public apolloProvider: Apollo
  ) {}

  ngOnInit() {
    this.loadRepositories();
  }

  get experience() {
    return this.profileService.getProfile(this.profile)?.experience;
  }

  onNewExperience() {
    this.profileService.addExperience(this.profile, this.newExperience);
  }

  loadRepositories() {
    this.apolloProvider
      .watchQuery({
        query: gql`
          query {
            user(login: "harrydoerr") {
              avatarUrl
              repositories(first: 20, privacy: PUBLIC) {
                totalCount
                nodes {
                  name
                  url
                }
              }
            }
          }
        `,
      })
      .valueChanges.subscribe(({ data }: any) => {
        this.avatarUrl = data?.user?.avatarUrl || null;
        this.repositories = data?.user?.repositories?.nodes || [];
      });
  }
}

interface Repository {
  name: string;
  url: string;
}
