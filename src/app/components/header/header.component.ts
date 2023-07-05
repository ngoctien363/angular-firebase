import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  selectedOption: string = 'allCategories';
  menus: Array<any> = [];
  category$: Observable<Category[]>;

  constructor( categoryService: CategoryService,){
    this.category$ = categoryService.category$;
    this.category$.subscribe(a => console.log(a, 'category'))
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
