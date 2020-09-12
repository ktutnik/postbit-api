import { EntityBase } from "../_shared";
import { collection } from "@plumier/mongoose";
import { route, authorize, val } from "plumier";
import { noop } from "tinspector";
import { ShopBranch } from "../shop-branch/shop-branch.entity";
import { Shop } from "../shop/shop.entity";
import { StockTransferDetail } from "./stock-transfer-detail.entity";
import { StockTransferRetur } from "./stock-transfer-retur.entity";

@collection()
@route.controller()
export class StockTransfer extends EntityBase {
  @val.required()
  invoiceNumber: string;

  @val.required()
  transactionDate: Date;

  @val.required()
  @collection.ref(Shop)
  shop: Shop;

  @val.required()
  @collection.ref(ShopBranch)
  shopBranch: ShopBranch;

  @noop()
  note: string;

  @noop()
  total: Number;

  @route.controller()
  @collection.ref((x) => [StockTransferDetail])
  details: StockTransferDetail[];

  @route.controller()
  @collection.ref((x) => [StockTransferRetur])
  retur: StockTransferRetur[];
}
