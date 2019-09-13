import { Component, OnInit } from '@angular/core';
import { PaySService } from '../../../services/pay-s.service';
import { environment } from '../../../../environments/environment';
@Component({
  selector: 'app-custom-plan',
  templateUrl: './custom-plan.component.html',
  styleUrls: ['./custom-plan.component.css']
})
export class CustomPlanComponent implements OnInit {
  transactionType = "authCaptureTransaction";
  showMsg: boolean = false;
  alertType: boolean = false;
  responseDescription: any;

  constructor(private payService: PaySService) { }

  ngOnInit() {
  }

  pay(value: any) {
    value = {
      "createTransactionRequest": {
        "merchantAuthentication": {
          "name": environment.apiLoginID,
          "transactionKey": environment.transactionKey
        },
        "transactionRequest": {
          "transactionType": this.transactionType,
          "amount": value.planAmount,
          "payment": {
            "creditCard": {
              "cardNumber": value.cardNumber,
              "expirationDate": value.expirationDate,
              "cardCode": value.cardCode
            }
          },
          "billTo": {
            "firstName": value.firstName,
            "lastName": value.lastName,
            "address": value.address,
            "city": value.city,
            "state": value.state,
            "zip": value.zipCode,
            "country": value.country,
            "phoneNumber": value.phone,
            "email": value.email
          }
        }
      }
    }

    this.payService.redirectPay(value).subscribe(response => {
      this.showMsg = true;
      this.responseDescription = response;
      if (this.responseDescription.messages.resultCode === "Ok") {
        this.alertType = true;
        this.responseDescription = "The transaction completed successfully. Have a nice day!";
      } else {
        this.responseDescription = "The transaction failed. Please try again after some time. Check with the bank for more details";
      }
    });

    this.alertType = false;
  }
}
