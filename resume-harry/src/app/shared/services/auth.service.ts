import { Injectable } from '@angular/core';
import { ProfileService } from './profile.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    public profileService: ProfileService,
    private http: HttpClient,
    private router: Router
  ) {}

  isLoggedIn = false;

  redirectUrl: string | null = null;

  login(): void {
    this.isLoggedIn = Boolean(this.profileService.getCurrentUserLoggedIn());
    this.router.navigate(['/home']).then((r) => r);
  }

  logout(): void {
    this.isLoggedIn = false;
    this.router.navigate(['/']).then((r) => r);
  }
}
