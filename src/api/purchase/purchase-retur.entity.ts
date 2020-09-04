import { EntityBase } from "../_shared";
import { collection } from "@plumier/mongoose";
import { val, bind, route } from "plumier";
import { noop } from "tinspector";
import { Purchase } from "./purchase.entity";
import { PurchaseReturDetail } from "./purchase-retur-detail.entity";

@collection()
export class PurchaseRetur extends EntityBase {
  @bind.query("pid")
  @val.required()
  @collection.ref((x) => Purchase)
  purchase: Purchase;

  @val.required()
  invoiceNumber: string;

  @val.required()
  returDate: Date;

  @noop()
  note: string;

  @val.required()
  returPayment: Number;

  @route.controller()
  @collection.ref((x) => [PurchaseReturDetail])
  details: PurchaseReturDetail[];
}
