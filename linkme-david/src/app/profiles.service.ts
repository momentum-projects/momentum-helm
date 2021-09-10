import { Injectable } from '@angular/core';

export default class Profile {
  constructor(
    public firstName: string,
    public lastName: string,
    public title: string,
    public experience: string[]
  ) {}
}

@Injectable({
  providedIn: 'root',
})
export class ProfilesService {
  private profiles = [
    new Profile('David', 'Rasch', 'Mr.', [
      'Developer 2020',
      'Angular Instructor 2021',
    ]),
    new Profile('Alan', 'Cox', 'Mr.', ['CTO 2020-2021']),
    new Profile('Dee', 'Meyers', 'Ms.', ['Student 2020', 'Developer 2021']),
  ];

  addProfile(profile: Profile) {
    this.profiles.push(profile);
  }
  getProfile(index: number) {
    return this.profiles[index];
  }
  addExperience(index: number, experience: string) {
    return this.getProfile(index).experience.push(experience);
  }
}
