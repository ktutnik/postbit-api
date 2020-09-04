import { EntityBase } from "../_shared";
import { collection } from "@plumier/mongoose";
import { route, authorize, val, bind } from "plumier";
import { Product, ProductInventory } from "../product/product.entity";
import { Purchase } from "../purchase/purchase.entity";
import { Order } from "./order.entity";

@collection()
export class OrderDetail extends EntityBase {
  @bind.query("pid")
  @val.required()
  @collection.ref((x) => Order)
  order: Order;

  @val.required()
  @collection.ref(Product)
  product: Product;

  @val.required()
  @collection.ref(ProductInventory)
  inventory: ProductInventory;

  @val.required()
  sellPrice: Number; // how to make it can't edit

  @val.required()
  qty: Number;

  @authorize.readonly()
  totalPrice: Number;
}
