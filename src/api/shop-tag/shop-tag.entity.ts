import { collection } from "@plumier/mongoose";
import { route, val, authorize, bind } from "plumier";
import { EntityBase } from "../_shared";
import { Shop } from "../shop/shop.entity";

@collection()
@route.controller()
export class ShopTag extends EntityBase {
  @val.required()
  text: string;

  @val.required()
  @val.slug()
  slug: string;

  @collection.ref(Shop)
  shop: Shop;
}
