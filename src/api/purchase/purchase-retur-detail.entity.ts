import { EntityBase } from "../_shared";
import { collection } from "@plumier/mongoose";
import { route, val } from "plumier";
import { Product, ProductInventory } from "../product/product.entity";
import { PurchaseRetur } from "./purchase-retur.entity";

@collection()
export class PurchaseReturDetail extends EntityBase {
  @val.required()
  @collection.ref((x) => PurchaseRetur)
  purchaseRetur: PurchaseRetur;

  @val.required()
  @collection.ref(Product)
  product: Product;

  @val.required()
  @collection.ref(ProductInventory)
  inventory: ProductInventory;

  @val.required()
  qty: Number;
}
