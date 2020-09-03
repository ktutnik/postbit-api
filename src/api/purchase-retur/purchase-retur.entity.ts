import { EntityBase, PaymentType } from "../_shared";
import { collection } from "@plumier/mongoose";
import { route, authorize, val } from "plumier";
import { noop } from "tinspector";
import { Supplier } from "../supplier/supplier.entity";
import { ShopBranch } from "../shop-branch/shop-branch.entity";
import { PurchaseOrder } from "../purchase-order/purchase-order.entity";

@collection()
@route.controller()
export class PurchaseRetur extends EntityBase {
  @val.required()
  invoiceNumber: string;

  @val.required()
  @collection.ref(PurchaseOrder)
  purchaseOrder: PurchaseOrder;

  @val.required()
  returDate: Date;

  @noop()
  note: string;

  @val.required()
  returPayment: Number;
}
