import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  produces: Array<any> = [];

  constructor() {
    this.getImageForProduces()
  }
  getImageForProduces() {
    this.produces.push(
      {
        id: 1,
        imagePath: '../../../assets/image/Rectangle19.svg',
        price: '195,13 $',
        text: 'Vonna Neva Walnut Sandalye Chair',
        color: [
          {url: '../../../assets/color-dot/1.png'},
          {url: '../../../assets/color-dot/2.png'},
          {url: '../../../assets/color-dot/3.png'},
        ],
      },
      {
        id: 2,
        imagePath: '../../../assets/image/Rectangle1.svg',
        price: '458,43 $',
        text: 'Wood lamp, Floor Lamp, Lambader, Decorative',
        color: [
          {url: '../../../assets/color-dot/1.png'},
          {url: '../../../assets/color-dot/2.png'},
          {url: '../../../assets/color-dot/3.png'},
          {url: '../../../assets/color-dot/4.png'},
          {url: '../../../assets/color-dot/5.png'},
        ],
      },
      {
        id: 3,
        imagePath: '../../../assets/image/Rectangle2.svg',
        price: '789,67 $',
        text: 'NOCKEBY 3-Seat Sofa Cover Slipcover Hand Made With Multiple',
        color: [
          {url: '../../../assets/color-dot/1.png'},
          {url: '../../../assets/color-dot/2.png'},
          {url: '../../../assets/color-dot/3.png'},
        ],
      },
      {
        id: 4,
        imagePath: '../../../assets/image/Rectangle3.svg',
        price: '43,23 $',
        text: 'Lace Punch Needle Pillow Covers with invisible zipper, 16*16 inches',
        color: [
          {url: '../../../assets/color-dot/1.png'},
          {url: '../../../assets/color-dot/2.png'},
          {url: '../../../assets/color-dot/3.png'},
          {url: '../../../assets/color-dot/4.png'},
          {url: '../../../assets/color-dot/5.png'},
        ],
      }
    );
  }
}
