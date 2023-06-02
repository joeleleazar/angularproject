import { Component,OnInit } from '@angular/core';
import Product from 'src/app/models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  titles:string[] = ['#','Nombre','Detalle','Precio','Stock','Acciones'];
  products: Product[] = mock;
  constructor(){}
  ngOnInit(): void {
    
  }
}

const mock: Product[] = [
  {
    id : 1,
    name : "Nombre 1",
    detail : "Detalle 1",
    price: 10,
    stock: 20
  },
  {
    id : 2,
    name : "Nombre 2",
    detail : "Detalle 2",
    price: 20,
    stock: 30
  },
  {
    id : 3,
    name : "Nombre 3",
    detail : "Detalle 3",
    price: 40,
    stock: 50
  },
  {
    id : 3,
    name : "Nombre 3",
    detail : "Detalle 3",
    price: 40,
    stock: 50
  }
];