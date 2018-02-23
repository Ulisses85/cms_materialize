import { Component, OnInit } from '@angular/core';
import { PageService } from './../../services/page.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-add-page',
  templateUrl: './admin-add-page.component.html',
  styleUrls: ['./admin-add-page.component.css']
})
export class AdminAddPageComponent implements OnInit {

    public successMsg: boolean = false;
    public errorMsg: boolean = false;
    public title: string;
    public content: string;

  constructor(
    private pageService: PageService,
    private router: Router


  ) { }

  ngOnInit() {
    if (!localStorage.getItem("user")) {
      this.router.navigateByUrl('');
  } else {
    addPage({form, value, valid}) {
      form.reset();
      }
    }
  }

}
