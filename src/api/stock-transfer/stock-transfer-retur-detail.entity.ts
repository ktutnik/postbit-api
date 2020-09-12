import { EntityBase } from "../_shared";
import { collection } from "@plumier/mongoose";
import { val } from "plumier";
import { Product, ProductInventory } from "../product/product.entity";
import { StockTransferRetur } from "./stock-transfer-retur.entity";

@collection()
export class StockTransferReturDetail extends EntityBase {
  @val.required()
  @collection.ref((x) => StockTransferRetur)
  stockTransferRetur: StockTransferRetur;

  @val.required()
  @collection.ref(Product)
  product: Product;

  @val.required()
  @collection.ref(ProductInventory)
  inventory: ProductInventory;

  @val.required()
  qty: Number;
}
