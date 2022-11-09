import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CardService } from 'src/app/card.service';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css']
})
export class CardDetailComponent implements OnInit {
  food: {name: string, price: number, detail: string, img: string};
  temp: {name: string, price: number, detail: string, img: string}[]
  a: number

  

  constructor(private CardService: CardService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.temp = this.CardService.cardElements
    this.a = this.temp.findIndex(item => { return item.name === this.route.snapshot.params['name']})
    this.food = {
      name: this.temp[this.a].name,
      price: this.temp[this.a].price,
      detail: this.temp[this.a].detail,
      img: this.temp[this.a].img
    }
    this.route.params
      .subscribe(
        (params: Params) => {
          this.food.name = params['name'],
          this.food.price = this.temp[this.a].price,
          this.food.detail = this.temp[this.a].detail,
          this.food.img = this.temp[this.a].img
        }
      )
  }

}
