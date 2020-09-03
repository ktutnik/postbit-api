import { EntityBase, PaymentType } from "../_shared";
import { collection } from "@plumier/mongoose";
import { route, authorize, val } from "plumier";
import { noop } from "tinspector";
import { Product } from "../product/product.entity";
import { PurchaseOrder } from "../purchase-order/purchase-order.entity";

@collection()
@route.controller()
export class PurchaseOrderDetail extends EntityBase {
  @val.required()
  @collection.ref(PurchaseOrder)
  purchaseOrder: PurchaseOrder;

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
