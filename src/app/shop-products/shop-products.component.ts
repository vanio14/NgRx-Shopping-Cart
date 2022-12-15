import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { addProduct } from './../cart-state-store/cart.actions';
import { Product } from './../entity/product';

export const PRODUCTS = [ {
  id: 1,
  name: "Socks on sale",
  description: "Comfortable Nike socks for men",
  price: 50,
  image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/17f774fb-a2ba-46cb-b6bf-7a798594f5ee/everyday-cushioned-training-ankle-socks-M8n3Xm.png",
}, {
  id: 2,
  name: "White T-shirt",
  description: "Nice white t-shirts for men",
  price: 150.00,
  image: "https://i.pinimg.com/564x/c1/1d/16/c11d164de692594acf53c9a855093139.jpg",
}, {
  id: 3,
  name: "Air Force 1",
  description: "The best shoe ever created.",
  price: 900,
  image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e777c881-5b62-4250-92a6-362967f54cca/air-force-1-07-sko-QxRXZV.png",
}]

@Component({
  selector: 'app-shop-products',
  templateUrl: './shop-products.component.html',
  styleUrls: ['./shop-products.component.css']
})
export class ShopProductsComponent implements OnInit {

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

  public products(): Product[] {
    return PRODUCTS
  }

  public buyProduct(product: Product) {
    this.store.dispatch(addProduct(product));
  }
}
