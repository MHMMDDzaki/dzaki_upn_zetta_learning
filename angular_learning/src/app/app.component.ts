import { Component,OnInit } from '@angular/core';
import { CardService } from './card.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  cardElements: {name: string, price: number, detail: string, img: string}[] = []
  cartElements: {name: string, price: number, detail: string, img: string}[] = []


  constructor(private CardService: CardService){}

  ngOnInit(): void {
    this.cardElements = this.CardService.cardElements
    this.cartElements = this.CardService.cartElements
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
