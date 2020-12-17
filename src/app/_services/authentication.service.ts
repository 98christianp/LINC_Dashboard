import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, config } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

import { User } from '../_model/user';
import { Router } from '@angular/router';
import { Tokens } from '../_model/tokens';

/**
 * @description Service used to handle authentication of the user
 * @author Mathias Milter Liboriussen
 */
@Injectable({ providedIn: 'root' })
export class AuthenticationService {

    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;
    private readonly JWT_TOKEN = 'JWT_TOKEN';
    private readonly REFRESH_TOKEN = 'REFRESH_TOKEN';
    private loggedUser: string;

    private REST_API_SERVER = "https://python-service-linc-dtu.eu-de.mybluemix.net/";
    private REST_API_SERVER2 = "http://localhost:3000/";

    constructor(private http: HttpClient, private router: Router) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public login(username, password) {
        return this.http.post<any>(this.REST_API_SERVER + `users/login`, { username, password })
            .pipe(map(user => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                this.doLoginUser(username, new Tokens(user['token'], user['refresh-token']))
                this.currentUserSubject.next(user);
                return user;
            }))
            .pipe(catchError((err: any) =>{
                // User credentials were wrong
                throw (err)
            }));
    }

    public logout() {
        // remove user from local storage and set current user to null
        this.doLogoutUser()
        this.router.navigate(['/login']);
    }

    public refreshToken() {
        return this.http.post<any>(this.REST_API_SERVER+`users/refreshtoken`, {
          'username': this.loggedUser
        }).pipe(tap((user) => {
          this.storeJwtToken(user["access_token"]);
        }));
      }

    public isLoggedIn() {
      return !!this.getJwtToken();
    }
    public getJwtToken() {
      return localStorage.getItem(this.JWT_TOKEN);
    }
    public getRefreshToken() {
      return localStorage.getItem(this.REFRESH_TOKEN);
    }

    private storeTokens(tokens: Tokens) {
      localStorage.setItem(this.JWT_TOKEN, tokens.jwt);
      localStorage.setItem(this.REFRESH_TOKEN, tokens.refreshToken);
    }
    private storeJwtToken(jwt: string) {
      localStorage.setItem(this.JWT_TOKEN, jwt);
    }
    private removeTokens() {
      localStorage.removeItem(this.JWT_TOKEN);
      localStorage.removeItem(this.REFRESH_TOKEN);
    }

    private doLoginUser(username: string, tokens: Tokens) {
      this.loggedUser = username;
      this.storeTokens(tokens);
    }

    private doLogoutUser() {
      this.loggedUser = null;
      this.removeTokens();
    }
}
