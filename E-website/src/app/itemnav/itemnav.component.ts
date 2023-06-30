import { Component } from '@angular/core';

@Component({
  selector: 'app-itemnav',
  templateUrl: './itemnav.component.html',
  styleUrls: ['./itemnav.component.css']
})
export class ItemnavComponent {

  navitem = [
    {id:1, name: 'Grocery', more: "no" , image:'./assets/itemnav/1.webp'},
    {id:2, name: 'Mobiles', more: "no" , image:'/assets/itemnav/2.webp'},
    {id:3, name: 'Fashions', more: "yes" , image:'/assets/itemnav/3.webp'},
    {id:4, name: 'Electronics', more: "yes" , image:'/assets/itemnav/4.webp'},
    {id:5, name: 'Home &Furniture', more: "yes" , image:'/assets/itemnav/5.webp'},
    {id:6, name: 'Appliances', more: "no" , image:'/assets/itemnav/6.webp'},
    {id:6, name: 'Travel', more: "no" , image:'/assets/itemnav/7.webp'},
    {id:6, name: 'Top Offers', more: "no" , image:'/assets/itemnav/8.webp'},
    {id:6, name: 'Beauty Toys &More', more: "yes" , image:'/assets/itemnav/9.webp'},
    {id:6, name: 'Two Wheelers', more: "yes" , image:'/assets/itemnav/10.webp'},

  ]
}
