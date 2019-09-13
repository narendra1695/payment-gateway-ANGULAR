import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-landing-comp',
  templateUrl: './landing-comp.component.html',
  styleUrls: ['./landing-comp.component.css']
})
export class LandingCompComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
    this.route.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0)
    });
  }

  goToPlans() {
    this.route.navigateByUrl("plans");
  }

  goToPolicy() {
    this.route.navigateByUrl("policy");
  }

  goToEPay() {
    this.route.navigateByUrl("eCheck");
  }
}
