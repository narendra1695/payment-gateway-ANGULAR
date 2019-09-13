import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.css']
})
export class PlansComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  goToPolicy() {
    this.route.navigateByUrl("policy");
  }

  goToEPay() {
    this.route.navigateByUrl("eCheck");
  }
}
