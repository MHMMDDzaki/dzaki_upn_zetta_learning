import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

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
  @Output('cartAdd') cartAdded = new EventEmitter<{cartName:string, cartPrice:number, cartDetail:string, cartImg:string}>();

  buttonDetail: boolean[] = [false, false, false, false];
  //buttonDetail: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  showDetail(param) {
    this.buttonDetail[param] = !this.buttonDetail[param];
  }


  onCartAdded(){
    this.cartAdded.emit({
      cartName: this.element.name,
      cartPrice: this.element.price,
      cartDetail: this.element.detail,
      cartImg: this.element.img
    })
  }

}
