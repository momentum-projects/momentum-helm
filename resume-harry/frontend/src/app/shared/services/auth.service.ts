import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    public loginService: LoginService,
    private http: HttpClient,
    private router: Router
  ) {}

  isLoggedIn = false;

  redirectUrl: string | null = null;

  login(): void {
    this.isLoggedIn = Boolean(this.loginService.getCurrentUser());
    this.router.navigate(['/profiles']).then((r) => r);
  }

  logout(): void {
    this.isLoggedIn = false;
    this.router.navigate(['/']).then((r) => r);
  }
}
