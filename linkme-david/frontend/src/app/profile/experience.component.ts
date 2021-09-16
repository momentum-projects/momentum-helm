import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Apollo, gql } from 'apollo-angular';
import { ProfilesService } from '../profiles.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent implements OnInit {
  @Input() profile!: number;
  @Input() editable!: boolean;

  newExperience: string = '';
  repositories: Repository[] = [];
  avatarUrl?: string;

  constructor(
    public profilesService: ProfilesService,
    public apolloProvider: Apollo
  ) {}

  onSubmit(experienceForm: NgForm) {
    console.log(experienceForm);
  }

  ngOnInit() {
    this.loadRepositories();
  }

  get experience() {
    return this.profilesService.getProfile(this.profile)?.experience || [];
  }

  onNewExperience() {
    this.profilesService.addExperience(this.profile, this.newExperience);
  }

  loadRepositories() {
    this.apolloProvider
      .use('github')
      .watchQuery({
        query: gql`
          query {
            user(login: "drasch") {
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
        console.log(data);
        this.avatarUrl = data?.user?.avatarUrl || null;
        this.repositories = data?.user?.repositories?.nodes || [];
      });
  }
}

interface Repository {
  name: string;
  url: string;
}
