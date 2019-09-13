import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-policy',
  templateUrl: './policy.component.html',
  styleUrls: ['./policy.component.css']
})
export class PolicyComponent implements OnInit {

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
