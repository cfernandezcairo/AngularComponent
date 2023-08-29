import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products = [
    {id:1, name: 'Product1', price: '100', color: ' black', available: 'Available', image: '/assets/products/product-image-1.jpg'},
    {id:1, name: 'Product2', price: '200', color: ' bluw', available: 'Not Available', image: '/assets/products/product-image-2.jpg'},
    {id:1, name: 'Product3', price: '300', color: ' red', available: 'Available', image: '/assets/products/product-image-3.jpg'}
  ];
}
