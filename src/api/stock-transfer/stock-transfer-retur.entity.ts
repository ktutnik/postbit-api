import { EntityBase } from "../_shared";
import { collection } from "@plumier/mongoose";
import { val, bind, route } from "plumier";
import { noop } from "tinspector";
import { StockTransfer } from "./stock-transfer.entity";
import { StockTransferReturDetail } from "./stock-transfer-retur-detail.entity";

@collection()
export class StockTransferRetur extends EntityBase {
  @val.required()
  @collection.ref((x) => StockTransfer)
  stockTransfer: StockTransfer;

  @val.required()
  invoiceNumber: string;

  @val.required()
  returDate: Date;

  @noop()
  note: string;

  @val.required()
  returPayment: Number;

  @route.controller()
  @collection.ref((x) => [StockTransferReturDetail])
  details: StockTransferReturDetail[];
}
