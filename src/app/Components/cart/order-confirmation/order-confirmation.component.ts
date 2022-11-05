
import { Component, Input, OnInit } from '@angular/core';
import { UserInfo } from 'src/app/Models/user-info';

@Component({
  selector: 'app-order-confirmation',
  templateUrl: './order-confirmation.component.html',
  styleUrls: ['./order-confirmation.component.scss']
})
export class OrderConfirmationComponent implements OnInit {
  @Input() userInfo:UserInfo ={
    fullName:'',
    address: '',
    creditCardNumber:0,
  } ;

  @Input() Total:number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
