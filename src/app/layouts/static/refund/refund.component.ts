import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-refund',
  templateUrl: './refund.component.html',
  styleUrls: ['./refund.component.css']
})
export class RefundComponent implements OnInit {

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
