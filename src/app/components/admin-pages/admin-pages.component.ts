import { Component, OnInit } from '@angular/core';
import { PageService } from './../../services/page.service';

@Component({
  selector: 'app-admin-pages',
  templateUrl: './admin-pages.component.html',
  styleUrls: ['./admin-pages.component.css']
})
export class AdminPagesComponent implements OnInit {

  pages: any;
  successMsg: boolean = false;
  errorMsg: boolean = false;

  constructor(
    private pageService: PageService
  ) { }

  ngOnInit() {
    this.pages = this.pageService.pagesBS;
  }

}
