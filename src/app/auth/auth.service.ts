import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient

  ) { }

  public get currentUserValue() {
    return JSON.parse(localStorage.getItem('currentUser'));
  }

  login(user) {
    return this.http.post('http://localhost:3001/login', user);
  }

  logout() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('currentUser');
  }

  public get loggedIn(): boolean {
    return (localStorage.getItem('access_token') !== null);
  }
}
