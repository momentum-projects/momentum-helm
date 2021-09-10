import { Component, Input, SimpleChanges, OnDestroy } from '@angular/core';
import { ProfilesService } from '../profiles.service';
import { environment } from '../../environments/environment';
import { Apollo, gql } from 'apollo-angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  @Input() profile!: number;
  @Input() name!: string;

  githubToken = environment.githubToken;

  constructor(
    public profilesService: ProfilesService,
    private apolloProvider: Apollo
  ) {}

  get profileObject() {
    return this.profilesService.getProfile(this.profile);
  }

  repositories() {
    this.apolloProvider
      .watchQuery({
        query: gql`
          query {
            viewer {
              repositories(first: 30, privacy: PUBLIC) {
                nodes {
                  name
                  url
                  stargazerCount
                }
              }
            }
          }
        `,
      })
      .valueChanges.subscribe(({ data, loading }) => {
        console.log(data);
        console.log(loading);
      });
  }
}
