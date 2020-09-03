import { EntityBase, PaymentType } from "../_shared";
import { collection } from "@plumier/mongoose";
import { route, authorize, val } from "plumier";
import { noop } from "tinspector";
import { Product } from "../product/product.entity";
import { Purchase } from "../purchase/purchase.entity";

@collection()
@route.controller()
export class PurchaseDetail extends EntityBase {
  @val.required()
  @collection.ref(Purchase)
  purchaseOrder: Purchase;

  @val.required()
  @collection.ref(Product)
  product: Product;

  @val.required()
  quantity: Number;

  @noop()
  discount: Number;

  @authorize.readonly()
  total: Number;
}
