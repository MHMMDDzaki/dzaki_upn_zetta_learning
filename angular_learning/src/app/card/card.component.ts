import { Component, OnInit, Input } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

  showDetail(param) {
    this.buttonDetail[param] = !this.buttonDetail[param];
  }

}
