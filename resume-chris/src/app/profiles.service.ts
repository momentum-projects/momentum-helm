import { Injectable } from '@angular/core';

export default class Profile {
  constructor(
    public id: number,
    public firstName: string,
    public lastName: string,
    public title: string,
    public experience: string[] = [],
    public connections: number[] = []
  ) {}

  get name() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const PROFILE_KEY = 'profiles';

@Injectable({
  providedIn: 'root',
})
export class ProfilesService {
  private profiles: Profile[] = [
    new Profile(0, 'Chris', 'Athanas', 'Mr.', [
      'Android Developer 2020',
      'Thai Mat Bodyworker',
    ]),
    new Profile(1, 'Alan', 'Cox', 'Mr.', [
      'Developer 2020',
      'Angular instructor',
    ]),
    new Profile(2, 'Dee', 'Meyers', 'Ms.', ['Student 2020', 'Devloper 2021']),
  ];

  constructor() {
    // if localStorage profiles are empty, populate them with our default data
    if (window.localStorage.getItem(PROFILE_KEY) == null) {
      this.saveProfilesToLocalStorage();
    }
    this.loadProfilesFromLocalStorage();
  }

  getProfiles() {
    return this.profiles;
  }
  addProfile(profile: Profile) {
    this.profiles.push(profile);
    this.saveProfilesToLocalStorage();
  }
  getProfile(index: number): Profile | null | undefined {
    return this.profiles.find((profile) => profile.id == index);
  }
  saveProfilesToLocalStorage() {
    window.localStorage.setItem(PROFILE_KEY, JSON.stringify(this.profiles));
  }
  loadProfilesFromLocalStorage() {
    this.profiles = JSON.parse(
      window.localStorage.getItem(PROFILE_KEY) || '[]'
    ).map(
      (obj: any) =>
        new Profile(
          obj.id,
          obj.firstName,
          obj.lastName,
          obj.title,
          obj.experience,
          obj.connections
        )
    );
  }
  addExperience(index: number, experience: string) {
    const profile = this.getProfile(index);

    if (profile) {
      profile.experience.push(experience);
      this.saveProfilesToLocalStorage();
      return;
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
    this.saveProfilesToLocalStorage();
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
    this.saveProfilesToLocalStorage();
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
function obj(obj: any, arg1: (Profile: any) => Profile): Profile[] {
  throw new Error('Function not implemented.');
}

