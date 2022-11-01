import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cardElements = [
    { name: 'sushi', price: 20000, detail: "Sushi is a Japanese dish featuring specially prepared rice and usually some type of fish or seafood, often raw, but sometimes cooked.", img: "https://static.honestdocs.id/system/blog_articles/main_hero_images/000/002/990/original/Ikan_Mentah_Pada_Hidangan_Sushi__Aman_Untuk_di_Konsumsi.jpg" },
    { name: 'takoyaki', price: 15000, detail: "Takoyaki is a round, fried food made from batter, small pieces of tender octopus and other ingredients, like green onions and ginger.", img: "https://asset.kompas.com/crops/eXdiOnlTdAHUvCXK-Oq4XRODlq0=/0x0:1000x667/780x390/data/photo/2021/09/08/613812d19a190.jpeg" },
    { name: 'ramen', price: 30000, detail: "Ramen is a Japanese noodle soup, with a combination of a rich flavoured broth, one of a variety of types of noodle and a selection of meats or vegetables, often topped with a boiled egg.", img: "https://www.seriouseats.com/thmb/lwMJ-CYRhmT44xa2qdxFa_A_i_8=/610x458/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2013__09__20130910-crispy-pork-miso-ramen-03-2-85700bbc1b0843199c41648cb9f2c17c.jpg" },
    { name: 'tempura', price: 5000, detail: "Tempura is a popular Japanese dish in which food (most commonly seafood, vegetables, or sushi) is lightly battered and deep fried to create a light, crispy coating.", img: "https://www.masakapahariini.com/wp-content/uploads/2021/09/shutterstock_1257149590-780x440.jpg" },
  ];


  onCartAdded() {

  }
}
