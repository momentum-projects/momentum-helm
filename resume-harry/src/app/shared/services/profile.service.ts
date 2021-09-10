import { Injectable } from '@angular/core';

export class Profile {
  constructor(
    public id: number,
    public firstName: string,
    public lastName: string,
    public title: string,
    public experience: string[],
    public connections: number[],
    public isActive: boolean
  ) {}
}

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  profiles = [
    new Profile(
      0,
      'Harry',
      'Stephens',
      'Mr.',
      ['Product Designer 2020', 'Developer 2021'],
      [],
      false
    ),
    new Profile(
      1,
      'David',
      'Rasch',
      'Mr.',
      ['Developer 2020', 'Angular Instructor 2021'],
      [],
      false
    ),
    new Profile(
      2,
      'Alan',
      'Cox',
      'Mr.',
      ['CFO 2017-2018', 'CEO 2018-2019', 'CTO 2020-2021'],
      [],
      false
    ),
    new Profile(
      3,
      'Dee',
      'Meyers',
      'Ms.',
      ['Student 2019', 'Student 2020', 'Developer 2021'],
      [],
      false
    ),
  ];

  constructor() {}

  addProfile(profile: Profile) {
    this.profiles.push(profile);
  }

  getProfile(index: number) {
    return this.profiles.find((profile) => profile.id == index);
  }

  save() {
    const jsonData = JSON.stringify(this.profiles);
    localStorage.setItem('profileData', jsonData);
  }

  load() {
    return JSON.parse(<string>localStorage.getItem('profileData'));
  }

  clear() {
    localStorage.clear();
  }

  authorizeLogin(index: number): boolean {
    const profile = this.getProfile(index);
    if (profile) {
      profile.isActive = true;
      return true;
    } else {
      throw 'Profile does not exist';
    }
  }

  accountLogout(index: number | undefined) {
    if (index) {
      const profile = this.getProfile(index);
      if (profile) {
        profile.isActive = false;
        this.save();
      }
    } else {
      new Error('Profile does not exist');
    }
  }

  getCurrentUserLoggedIn() {
    return this.profiles.find((profile: Profile) => profile.isActive)?.id;
  }

  addExperience(index: number, experience: string) {
    const profile = this.getProfile(index);
    if (profile) {
      return profile.experience.push(experience);
    } else {
      throw 'Profile does not exist';
    }
  }

  connect(first: number, second: number) {
    const firstProfile = this.getProfile(first);
    const secondProfile = this.getProfile(second);
    if (!firstProfile || !secondProfile) {
      throw 'Tried connecting to non-existant profile(s)';
    }

    if (!firstProfile.connections.find((num) => num == second)) {
      firstProfile.connections.push(second);
    }
    if (!secondProfile.connections.find((num) => num == first)) {
      secondProfile.connections.push(first);
    }
  }

  disconnect(first: number, second: number) {
    const firstProfile = this.getProfile(first);
    const secondProfile = this.getProfile(second);

    if (!firstProfile || !secondProfile) {
      throw 'Tried disconnecting non-existant profile(s)';
    }

    let found = firstProfile.connections.findIndex((num) => num == second);
    if (found >= 0) {
      firstProfile.connections.splice(found, 1);
    }

    found = secondProfile.connections.findIndex((num) => num == first);
    if (found >= 0) {
      secondProfile.connections.splice(found, 1);
    }
  }

  isConnected(first: number, second: number) {
    const firstProfile = this.getProfile(first);
    const secondProfile = this.getProfile(second);

    if (!firstProfile || !secondProfile) {
      throw 'Tried checking connections for non-existant profile(s)';
    }

    return firstProfile.connections.find((num) => num == second);
  }
}
