import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    // Get the auth token from the service.
    const authToken = `Bearer ${localStorage.getItem('authorization')}`;
    let authReq = request;
    if (!request.headers.has('authorization')) {
      // Clone the request and replace the original headers with
      // cloned headers, updated with the authorization.
      authReq = request.clone({
        headers: request.headers.set('Authorization', authToken),
      });
    }

    return next.handle(authReq);
  }
}
