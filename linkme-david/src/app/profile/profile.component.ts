import { Component, Input, OnInit } from '@angular/core';
import { ProfilesService } from '../profiles.service';
import { environment } from '../../environments/environment';
import { Apollo, gql } from 'apollo-angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  @Input() profile!: number;
  @Input() name!: string;

  repositories: string[] = [];

  githubToken = environment.githubToken;

  constructor(
    public profilesService: ProfilesService,
    public apolloProvider: Apollo
  ) {}

  get profileObject() {
    return this.profilesService.getProfile(this.profile);
  }

  ngOnInit() {
    this.loadRepositories();
  }

  loadRepositories() {
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
      .valueChanges.subscribe(({ data, loading }: any) => {
        this.repositories =
          data?.viewer?.repositories?.nodes?.map((obj: any) => obj?.name) ||
          ([] as string[]);
        console.log(loading);
      });
  }
}
