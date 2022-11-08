import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CardService } from '../card.service';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input('card') element: {
    name: string;
    price: number;
    detail: string;
    img: string;
  }
  @Input() indexOfElement: number;

  buttonDetail: boolean[] = [false, false, false, false];
  //buttonDetail: boolean = false;

  constructor(private CardService: CardService) { }

  ngOnInit(): void {
  }

  showDetail(param) {
    this.buttonDetail[param] = !this.buttonDetail[param];
  }


  onCartAdded(name,price,detail,img){
    this.CardService.sendCard(name,price,detail,img)
  }

}
