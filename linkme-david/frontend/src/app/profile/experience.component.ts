import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProfilesService } from '../profiles.service';
import { HttpClient } from '@angular/common/http';
import { githubToken } from 'src/environments/secrets';

const githubUri = 'https://api.github.com/graphql';

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
    public http: HttpClient
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
    const query = `
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
        `;
    const resp = this.http
      .post(githubUri, JSON.stringify({ query }), {
        headers: { authorization: `Bearer ${githubToken}` },
      })
      .subscribe(({ data }: any) => {
        this.avatarUrl = data?.user?.avatarUrl || null;
        this.repositories = data?.user?.repositories?.nodes || [];
      });
  }
}

interface Repository {
  name: string;
  url: string;
}
