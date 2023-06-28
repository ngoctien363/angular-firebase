import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  selectedOption: string = 'allCategories';
  menus: Array<any> = [];

  constructor(){
    this.menus.push(
      {
        title: 'Clothing & Shoes',
        value: 'clothingShoes',
        selected: true,
      },
      {
        title: 'Home & Living',
        value: 'homeLiving',
        selected: false,
      },
      {
        title: 'Wedding & Party',
        value: 'weddingParty',
        selected: false,
      },
      {
        title: 'Toys & Entertainment',
        value: 'toysEntertainment',
        selected: false,
      },
      {
        title: 'Art & Collectibles',
        value: 'artCollectibles',
        selected: false,
      },
      {
        title: 'Craft Supplies & Tools',
        value: 'craftSuppliesTools',
        selected: false,
      },
    );
  }

  handleClick = (item: any) => {
    this.menus.forEach((category: any) => {
      if (category === item) {
        category.selected = true;
      } else {
        category.selected = false;
      }
    });
  }
}
