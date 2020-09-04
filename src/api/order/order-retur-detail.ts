import { EntityBase } from "../_shared";
import { collection } from "@plumier/mongoose";
import { route, val } from "plumier";
import { Product, ProductInventory } from "../product/product.entity";
import { OrderRetur } from "./order-retur.entity";

@collection()
export class OrderReturDetail extends EntityBase {
  @val.required()
  @collection.ref((x) => OrderRetur)
  orderRetur: OrderRetur;

  @val.required()
  @collection.ref(Product)
  product: Product;

  @val.required()
  @collection.ref(ProductInventory)
  inventory: ProductInventory;

  @val.required()
  qty: Number;
}
