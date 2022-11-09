import { Component,OnInit } from '@angular/core';
import { CardService } from './card.service';
import {ThemePalette} from '@angular/material/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  cardElements: {name: string, price: number, detail: string, img: string}[] = []
  cartElements: {name: string, price: number, detail: string, img: string}[] = []
  links = [{name: 'Home', url: '/'}, {name: 'Main Menu', url: 'main-menu'}];
  activeLink = this.links[0].name;



  constructor(private CardService: CardService, private router: Router){}

  ngOnInit(): void {
    this.cardElements = this.CardService.cardElements
    this.cartElements = this.CardService.cartElements
  }

  route(param) {
    this.activeLink = param.name
    this.router.navigate([param.url]);
  }
  // onCartAdded(cartInfo:{cartName: string, cartPrice: number, cartDetail: string, cartImg: string}){
  //   this.cartElements.push({
  //     name: cartInfo.cartName,
  //     price: cartInfo.cartPrice,
  //     detail: cartInfo.cartDetail,
  //     img: cartInfo.cartImg
  //   });
  // }

 

  // onCartDeleted(cartInfo:{cartName: string, cartPrice: number, cartDetail: string, cartImg: string}){
  //   this.cartElements.splice(this.cartElements.findIndex(item => {
  //     return item.name === cartInfo.cartName
  //   }),1)
  // }


}
