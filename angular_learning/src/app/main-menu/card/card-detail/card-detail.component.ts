import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CardService } from 'src/app/card.service';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css']
})
export class CardDetailComponent implements OnInit {
  food: {name: string};
  temp: {name: string, price: number, detail: string, img: string}

  

  constructor(private CardService: CardService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.food = {
      name: this.route.snapshot.params['name']
    }
    this.route.params
      .subscribe(
        (params: Params) => {
          this.food.name = params['name']
        }
      )
    
  }

}
