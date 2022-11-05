import { ShoppingCartService } from './../../Services/shopping-cart.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  @Input() isDarkModeActive:boolean = true;
  @Output("DarkModeChanged") NotifyDarkModeChanged  = new EventEmitter<boolean>();
  constructor(public shoppingCart:ShoppingCartService) {}

  OnDarkModeChanged(){

    this.isDarkModeActive = ! this.isDarkModeActive;
    this.NotifyDarkModeChanged.emit(this.isDarkModeActive);

  }

}
