import { EntityBase } from "../_shared";
import { collection, model } from "@plumier/mongoose";
import { authorize, val, bind } from "plumier";
import { Product, ProductInventory } from "../product/product.entity";
import { Order } from "./order.entity";

@collection()
export class OrderDetail extends EntityBase {
  @val.required()
  @collection.ref((x) => Order)
  order: Order;

  @val.required()
  @collection.ref((x) => Product)
  product: Product;

  @val.required()
  @collection.ref((x) => ProductInventory)
  inventory: ProductInventory;

  @val.required()
  sellPrice: Number; // how to make it can't edit

  @val.required()
  qty: Number;

  @authorize.readonly()
  totalPrice: Number;
}
model(OrderDetail);
