import { EntityBase } from "../_shared";
import { collection } from "@plumier/mongoose";
import { route, val, bind } from "plumier";
import { noop } from "tinspector";
import { Shop } from "./shop.entity";

@collection()
export class ShippingAgent extends EntityBase {
  @val.required()
  name: string;

  @noop()
  apiKey: string; // api key

  @bind.query("pid")
  @collection.ref((x) => Shop)
  shop: Shop;
}
