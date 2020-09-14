import { EntityBase } from "../_shared";
import { collection } from "@plumier/mongoose";
import { route, val, bind } from "plumier";
import { noop } from "tinspector";
import { Shop } from "./shop.entity";

@collection()
export class ChannelMarketing extends EntityBase {
  @val.required()
  name: string;

  @noop()
  key: string; // api key

  @collection.ref((x) => Shop)
  shop: Shop;
}
