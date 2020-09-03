import { EntityBase, PaymentType } from "../_shared";
import { collection } from "@plumier/mongoose";
import { route, authorize, val } from "plumier";
import { noop } from "tinspector";
import { Supplier } from "../supplier/supplier.entity";
import { ShopBranch } from "../shop-branch/shop-branch.entity";

@collection()
@route.controller()
export class PurchaseOrder extends EntityBase {
  @val.required()
  invoiceNumber: string;

  @val.required()
  @collection.ref(Supplier)
  supplier: Supplier;

  @val.required()
  transactionDate: Date;

  @val.required()
  paymentDate: Date;

  @val.required()
  @collection.ref(ShopBranch)
  shopBranch: ShopBranch;

  @noop()
  note: string;

  @val.required()
  paymentType: PaymentType;

  @noop()
  discount: Number;

  @noop()
  total: Number;

  @noop()
  downPayment: Number;

  @noop()
  shippingPrice: Number;

  @authorize.readonly()
  remainingPayment: Number;
}
