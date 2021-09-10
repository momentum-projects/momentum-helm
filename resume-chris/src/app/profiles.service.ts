import { Injectable } from '@angular/core';

export default class Profile {
  constructor(
    public firstName: string,
    public lastName: string,
    public title: string,
    public experience: string[],
    public connection: Set<number>
  ) {}
}


@Injectable({
  providedIn: 'root'
})
export class ProfilesService {

  private profiles = [
    new Profile(
      'Chris',
      'Athanas',
      'Mr.',
      ['Android Developer 2020', 'Thai Mat Bodyworker'],
      new Set<number>()
    ),
    new Profile(
      'Alan',
      'Cox',
      'Mr.',
      ['Developer 2020', 'Angular instructor'],
      new Set<number>()
    ),
    new Profile(
      'Dee',
      'Meyers',
      'Ms.',
      ['Student 2020', 'Devloper 2021'],
      new Set<number>()
    ),
  ];

  constructor() { }

  addProfile(profile: Profile) {
    this.profiles.push(profile)
  }
  getProfile(index: number) {
    return this.profiles[index];
  }
  addExperience(index:number, experience: string) {
    return this.getProfile(index).experience.push(experience);
  }
}
