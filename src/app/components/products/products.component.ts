import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [
  {
    id:'1',
    name: 'Producto 1',
    price: 100,
    image:'../../../assets/img/toy.jpg'
    },
    {
    id:'2',
    name: 'Producto 2',
    price: 100,
    image:'../../../assets/img/toy.jpg'
    },
    {
    id:'3',
    name: 'Producto 3',
    price: 100,
    image:'../../../assets/img/toy.jpg'
    }
    
    
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
