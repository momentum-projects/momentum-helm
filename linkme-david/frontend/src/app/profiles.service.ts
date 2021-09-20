import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

const defaultUri = 'http://localhost:4000/graphql';
export default class Profile {
  constructor(
    public id: number,
    public firstName: string,
    public lastName: string,
    public title: string,
    public experience: string[],
    public connections: number[] = []
  ) {}

  get name() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const PROFILES_KEY = 'profiles';

@Injectable({
  providedIn: 'root',
})
export class ProfilesService {
  profiles: Profile[] = [];

  constructor(public http: HttpClient) {
    this.load();
  }

  loadProfilesFromGraphQl() {
    return this.http
      .post(
        defaultUri,
        JSON.stringify({
          query: `
          query {
            allProfiles {
              id
              title
              firstName
              lastName
              experience
            }
          }
        `,
        }),
        { headers: { 'Content-Type': 'application/json' } }
      )
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
    }
    // Return an observable with a user-facing error message.
    return throwError('Something bad happened; please try again later.');
  }
  load() {
    this.loadProfilesFromGraphQl().subscribe(({ data }: any) => {
      this.profiles = data?.allProfiles?.map((item: Profile) => {
        return {
          ...item,
          connections: [],
        };
      });
    });
  }

  save() {
    localStorage.setItem(PROFILES_KEY, JSON.stringify(this.profiles));
  }
  getProfiles() {
    return this.profiles;
  }
  addProfile(profile: Profile) {
    this.profiles.push(profile);
  }
  getProfile(index: number) {
    return this.profiles.find((profile) => profile.id == index);
  }
  addExperience(index: number, experience: string) {
    const profile = this.getProfile(index);

    if (profile) {
      const exp = profile.experience.push(experience);
      this.save();
      return exp;
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
    this.save();
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
    this.save();
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
