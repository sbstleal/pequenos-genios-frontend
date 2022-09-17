import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {LoginResponse} from 'src/app/models/login.response.model';
import {Router} from "@angular/router";

const ACCESS_TOKEN: string = 'access_token';
const REFRESH_TOKEN: string = 'refresh_token';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private accessToken: string;
  private refreshToken: string;

  constructor(private http: HttpClient, private router: Router) {
    this.accessToken = this.getToken() ?? '';
    this.refreshToken = this.getRefreshToken() ?? '';
  }

  isTokenPresent(): boolean {
    return !!localStorage.getItem(ACCESS_TOKEN); // !! converts to boolean
  }

  getToken(): string | null {
    return this.isTokenPresent() ? localStorage.getItem(ACCESS_TOKEN) : null;
  }

  getRefreshToken(): string | null {
    return this.isTokenPresent() ? localStorage.getItem(REFRESH_TOKEN) : null;
  }

  setAccessToken(token: string): void {
    this.accessToken = token;
    localStorage.setItem(ACCESS_TOKEN, token);
  }

  setRefreshToken(refreshToken: string): void {
    this.refreshToken = refreshToken;
    localStorage.setItem(REFRESH_TOKEN, refreshToken);
  }

  removeTokens(): void {
    localStorage.removeItem(ACCESS_TOKEN);
    localStorage.removeItem(REFRESH_TOKEN);
  }

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(
      environment.backend + '/auth/login', {'username': username, 'password': password});
  }

  refreshTheToken(): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(environment.backend + '/auth/refresh', {refreshToken: this.refreshToken});
  }

  logout(): void {
    this.removeTokens();
    this.router.navigate(['/login'])
  }

  navigateToHome() {
    this.router.navigate(['/main/home']).then()
  }
}
