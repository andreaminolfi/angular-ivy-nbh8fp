import { Component, VERSION } from '@angular/core';
import { Product } from './model/products';

@Component({
  selector: 'my-app',
  // templateUrl: './app.component.html',
  // styleUrls: [ './app.component.css' ]
  template: `
    <h1 class="bg">hello acedemy</h1>
    <ang-hello></ang-hello>
    <button class="btn btn-primary">CLICK</button>

    <div *ngFor ="let product of products">
      {{product.name}}
    </div>

    
  `,
  styles: [
    `
    .bg { background-color: red }
    `,
  ],
})
export class AppComponent {
  products: Product[] = [
    {
      id: 1,
      name: 'Tshirt XYZ',
      cost: 50,
      img: 'https://picsum.photos/',
      variants: ['red', 'green'],
    },
    {
      id: 2,
      name: 'Tshirt ABC',
      cost: 40,
      img: 'https://picsum.photos/',
      variants: ['black', 'blue'],
    },
  ];

  const users = [
    { id: 1, name: 'Fabio' },
    { id: 2, name: 'Lorenzo' },
    { id: 3, name: 'Silvia' },
    ]

}
