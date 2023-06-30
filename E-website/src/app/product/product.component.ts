import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  products = [
    {id:1, name: 'Analog Watch', price: '1400', color: 'Black', available: 'Available', image:'/assets/products/watch.webp'},
    {id:2, name: 'Mi Android TV', price: '16999', color: 'Black', available: 'Not Available', image:'/assets/products/tv.webp'},
    {id:3, name: 'ASUS Monitors', price: '20599', color: 'Black', available: 'Available', image:'/assets/products/monitor.webp'},
    {id:4, name: 'Remote Controlled Toy', price: '799', color: 'Red', available: ' Not Available', image:'/assets/products/toy.webp'},
    {id:5, name: 'Sun Glasses', price: '449', color: 'Shady Green', available: 'Available', image:'/assets/products/glasses.webp'},
    {id:6, name: 'Samsung Wadhing Machine', price: '12999', color: 'Grey', available: 'Available', image:'/assets/products/wmachine.webp'},
  ]
}
