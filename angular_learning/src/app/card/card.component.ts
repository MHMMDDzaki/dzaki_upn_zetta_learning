import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  cardTitle = [
    {name:'sushi',price:20000,img:"https://static.honestdocs.id/system/blog_articles/main_hero_images/000/002/990/original/Ikan_Mentah_Pada_Hidangan_Sushi__Aman_Untuk_di_Konsumsi.jpg"},
    {name:'takoyaki',price:15000,img:"https://asset.kompas.com/crops/eXdiOnlTdAHUvCXK-Oq4XRODlq0=/0x0:1000x667/780x390/data/photo/2021/09/08/613812d19a190.jpeg"},
    {name:'ramen',price:30000,img:"https://www.seriouseats.com/thmb/lwMJ-CYRhmT44xa2qdxFa_A_i_8=/610x458/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2013__09__20130910-crispy-pork-miso-ramen-03-2-85700bbc1b0843199c41648cb9f2c17c.jpg"},
    {name:'tempura',price:5000,img:"https://www.masakapahariini.com/wp-content/uploads/2021/09/shutterstock_1257149590-780x440.jpg"}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
