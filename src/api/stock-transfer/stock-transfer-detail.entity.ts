import { EntityBase } from "../_shared";
import { collection } from "@plumier/mongoose";
import { route, val, bind } from "plumier";
import { Product, ProductInventory } from "../product/product.entity";
import { StockTransfer } from "./stock-transfer.entity";

@collection()
@route.controller()
export class StockTransferDetail extends EntityBase {
  @val.required()
  @collection.ref((x) => StockTransfer)
  stockTransfer: StockTransfer;

  @val.required()
  @collection.ref((x) => Product)
  product: Product;

  @val.required()
  @collection.ref((x) => ProductInventory)
  inventory: ProductInventory;

  @val.required()
  qty: Number;
}
