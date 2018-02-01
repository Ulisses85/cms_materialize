import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  constructor(private http: Http) { }

  register(user) {
  return this.http.post('http://localhost:5000/signup', user)
  .map(res => res.json());
  }

  login(user) {
  return this.http.post('http://localhost:5000/signin ', user)
  .map(res => res.json());
  }

}
