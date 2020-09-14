import { EntityBase } from "../_shared";
import { collection, model } from "@plumier/mongoose";
import { route, val, bind } from "plumier";
import { noop } from "tinspector";
import { Order } from "../order/order.entity";
import { OrderReturDetail } from "./order-retur-detail";

@collection()
export class OrderRetur extends EntityBase {
  @val.required()
  @collection.ref((x) => Order)
  order: Order;

  @val.required()
  invoiceNumber: string;

  @val.required()
  returDate: Date;

  @noop()
  note: string;

  @val.required()
  returPayment: Number;

  @route.controller()
  @collection.ref((x) => [OrderReturDetail])
  details: OrderReturDetail[];
}
model(OrderRetur);
