import { Injectable } from '@angular/core';
import { ProfilesService } from './profiles.service';
import { Apollo, gql } from 'apollo-angular';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  currentUser = 1;

  constructor(
    public profilesService: ProfilesService,
    private http: HttpClient
  ) {
    this.submitLoginCredentials('david', 'secret').subscribe(
      (res: HttpResponse<any>) => {
        localStorage.setItem('authorization', res.body?.token)
      })

    this.currentUser =
      parseInt(localStorage.getItem('USER') || '0') ||
      this.getCurrentProfile()?.id;
  }

  baseURL: string = 'http://localhost:4000/login/';

  submitLoginCredentials(email: string, password: string): Observable<any> {
    return this.http.post(this.baseURL, {email: 'david', password: 'secret'}, {
      headers: {
        responseType: 'json'
      },
      observe: 'response'
    });
  }

  getCurrentUser() {
    return this.currentUser;
  }
  setCurrentUser(user: number) {
    this.currentUser = user;
    localStorage.setItem('USER', this.currentUser.toString());
  }
  getCurrentProfile() {
    return (
      this.profilesService.getProfile(this.currentUser) ||
      this.profilesService.getProfiles()[0]
    );
  }
}
