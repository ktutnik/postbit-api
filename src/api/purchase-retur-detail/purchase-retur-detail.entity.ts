import { EntityBase, PaymentType } from "../_shared";
import { collection } from "@plumier/mongoose";
import { route, authorize, val } from "plumier";
import { noop } from "tinspector";
import { Product } from "../product/product.entity";
import { PurchaseRetur } from "../purchase-retur/purchase-retur.entity";

@collection()
@route.controller()
export class PurchaseOrderDetail extends EntityBase {
  @val.required()
  @collection.ref(PurchaseRetur)
  purchaseRetur: PurchaseRetur;

  @val.required()
  @collection.ref(Product)
  product: Product;

  @val.required()
  quantity: Number;
}
