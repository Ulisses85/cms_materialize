import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Injectable } from '@angular/core';

@Injectable()
export class PageService {

  constructor( private http: Http ) { }
  public pagesBS = new BehaviorSubject<string>(null);

getPages() {
  return this.http.get('http://localhost:5000/pages')
  .map(res => res.json());
  }

getPage(slug) {
  return this.http.get('http://localhost:5000/pages/'+ slug)
  .map(res => res.json());
  }

  postAddPage(value) {
    return this.http.post('http://localhost:5000/pages/add-page', value)
    .map(res => res.json());
    }
}
