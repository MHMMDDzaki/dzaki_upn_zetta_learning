import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  @Input('cart') elementC: {
    name: string;
    price: number;
    detail: string;
    img: string;
  }
  @Input() indexOfCart: number;
  @Output('cartDel') cartDeleted = new EventEmitter<{cartName:string, cartPrice:number, cartDetail:string, cartImg:string}>();

  deleteCart(){
    this.cartDeleted.emit({
      cartName: this.elementC.name,
      cartPrice: this.elementC.price,
      cartDetail: this.elementC.detail,
      cartImg: this.elementC.img
    })
    console.log(this.elementC)

  }

  constructor() { }

  ngOnInit(): void {
  }

}
