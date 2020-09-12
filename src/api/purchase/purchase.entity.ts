import { EntityBase } from "../_shared";
import { collection } from "@plumier/mongoose";
import { route, authorize, val } from "plumier";
import { noop } from "tinspector";
import { Supplier } from "../supplier/supplier.entity";
import { ShopBranch } from "../shop-branch/shop-branch.entity";
import { Shop } from "../shop/shop.entity";
import { PaymentType } from "../shop/payment-type.entity";
import { PurchaseDetail } from "./purchase-detail.entity";
import { PurchaseRetur } from "./purchase-retur.entity";
import { PurchaseReturDetail } from "./purchase-retur-detail.entity";

@collection()
@route.controller()
export class Purchase extends EntityBase {
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
  @collection.ref(Shop)
  shop: Shop;

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

  @route.controller()
  @collection.ref((x) => [PurchaseDetail])
  details: PurchaseDetail[];

  @route.controller()
  @collection.ref((x) => [PurchaseRetur])
  retur: PurchaseRetur[];
}
