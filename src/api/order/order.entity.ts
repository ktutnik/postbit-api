import { EntityBase } from "../_shared";
import { collection, model, proxy } from "@plumier/mongoose";
import { route, authorize, val } from "plumier";
import { noop } from "tinspector";
import { ShopBranch } from "../shop-branch/shop-branch.entity";
import { User } from "../user/user.entity";
import { ChannelMarketing } from "../shop/channel-marketing.entity";
import { PaymentType } from "../shop/payment-type.entity";
import { OrderDetail } from "./order-detail.entity";
import { OrderRetur } from "./order-retur.entity";

@collection()
@route.controller()
export class Order extends EntityBase {
  @val.required()
  invoiceNumber: string;

  @val.required()
  @collection.ref((x) => User)
  user: User;

  @val.required()
  transactionDate: Date;

  @val.required()
  paymentDate: Date;

  @noop()
  @collection.ref((x) => ShopBranch)
  shopBranch: ShopBranch;

  @noop()
  @collection.ref((x) => ChannelMarketing)
  onlineShop: ChannelMarketing;

  @val.required()
  isSellOnline: boolean;

  @noop()
  note: string;

  @val.required()
  paymentType: PaymentType;

  @noop()
  discount: Number;

  @noop()
  tax: Number;

  @noop()
  shippingPrice: Number;

  @authorize.readonly()
  total: Number;

  @noop()
  downPayment: Number;

  @authorize.readonly()
  remainingPayment: Number;

  // sub document
  @route.controller()
  @collection.ref((x) => [OrderDetail])
  details: OrderDetail[];

  // sub document
  @route.controller()
  @collection.ref((x) => [OrderRetur])
  returs: OrderRetur[];
}
proxy(Order);
