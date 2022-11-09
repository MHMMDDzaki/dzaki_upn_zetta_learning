import { Component, OnInit } from '@angular/core';
import { CardService } from '../card.service';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {
  cardElements: {name: string, price: number, detail: string, img: string}[] = []
  cartElements: {name: string, price: number, detail: string, img: string}[] = []


  constructor(private CardService: CardService){}

  ngOnInit(): void {
    this.cardElements = this.CardService.cardElements
    this.cartElements = this.CardService.cartElements
  }

}
