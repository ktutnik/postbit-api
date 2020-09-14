import { EntityBase } from "../_shared";
import { collection, model } from "@plumier/mongoose";
import { val } from "plumier";
import { Product, ProductInventory } from "../product/product.entity";
import { OrderRetur } from "./order-retur.entity";

@collection()
export class OrderReturDetail extends EntityBase {
  @val.required()
  @collection.ref((x) => OrderRetur)
  orderRetur: OrderRetur;

  @val.required()
  @collection.ref((x) => Product)
  product: Product;

  @val.required()
  @collection.ref((x) => ProductInventory)
  inventory: ProductInventory;

  @val.required()
  qty: Number;
}
model(OrderReturDetail);
