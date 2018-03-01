import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Injectable } from '@angular/core';


@Injectable()
export class SidebarService {

  constructor(
    private http: Http
  ) { }

  getSidebar() {
    return this.http.get('http://localhost:5000/sidebar/edit-sidebar')
    .map(res => res.json());
    }
  
  postSidebar(value) {
    return this.http.post('http://localhost:5000/sidebar/edit-sidebar', value)
    .map(res => res.json());
    }
  


}
