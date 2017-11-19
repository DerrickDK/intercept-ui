import { Component, OnInit } from '@angular/core';
import { AjaxService } from './../services/ajax.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  organizations: any[];

  constructor(private ajxSvc: AjaxService) { }

  ngOnInit() {
    this.initialize();
  }

  initialize() {
    console.log('initialize');
    this.ajxSvc.getOrganizations().subscribe(
      (data) => {
        // console.log(data);
        this.organizations = data.slice(0, 20);
        console.log(this.organizations);
      }, (err) => console.log(err)
    );
  }

}
