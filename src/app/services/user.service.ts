import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  constructor(private http: Http) { }

  signUp(user) {
  return this.http.get('http://localhost:5000/signup', user)
  .map(res => res.json());
  }

  signIn(user) {
  return this.http.get('http://localhost:5000/signin ', user)
  .map(res => res.json());
  }

}
