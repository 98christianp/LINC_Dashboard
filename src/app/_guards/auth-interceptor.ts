import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthenticationService } from '../_services/authentication.service';
import { BehaviorSubject, throwError, Observable} from 'rxjs';
import { catchError, switchMap, take, filter } from 'rxjs/operators';


/**
 * @description Authentication interceptors used to intercept http traffic
 * @author Mathias Milter Liboriussen
 */
@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private auth: AuthenticationService){}

  /**
   * @description Intercepts https requests, handling authentication related errors
   * @author Mathias Milter Liboriussen
   * @returns The intercepted request 
   */
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!req.url.includes('/login')) {
      if (req.url.includes('/refreshtoken')){
          req = this.addToken(req, this.auth.getRefreshToken())
      } else {
        req = this.addToken(req, this.auth.getJwtToken())
      }
        
    }

    return next.handle(req).pipe(catchError((err: HttpErrorResponse) => {

      if (
        req.url.includes("refreshtoken") ||
        req.url.includes("login")
      ) {
        // We do another check to see if refresh token failed
        // In this case we want to logout user and to redirect it to login page

        if (req.url.includes("refreshtoken")) {
            this.auth.logout();
        }

        throw new Error("User not verified");
      }
      

      // If error status is different than 401 (Unautherized) we want to skip refresh token
      // So we check that and throw the error if it's the case
      if (err.error.status !== 401) {
        throwError((err.error));
      } 
      
      return this.handle401Error(req, next);
    }));
  }

  private isRefreshing = false;
  private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  /**
   * @description Handle401s error
   * @author Mathias Milter Liboriussen
   * @returns the intercepted request, but with a new access token
   */
  private handle401Error(request: HttpRequest<any>, next: HttpHandler) {
    if (!this.isRefreshing) {
      this.isRefreshing = true;
      this.refreshTokenSubject.next(null);

      return this.auth.refreshToken().pipe(
        switchMap((token: any) => {
          this.isRefreshing = false;
          this.refreshTokenSubject.next(token["access_token"]);
          return next.handle(this.addToken(request, token["access_token"]));
        }));

    } else {
      return this.refreshTokenSubject.pipe(
        filter(token => token != null),
        take(1),
        switchMap(jwt => {
          return next.handle(this.addToken(request, jwt));
        }));
    }
  }

private addToken(request: HttpRequest<any>, token: string) {
  return request.clone({
    setHeaders: {
      'Authorization': `Bearer ${token}`
    }
  });
}
}