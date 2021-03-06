import { collection } from "@plumier/mongoose";
import { val, route, bind } from "plumier";
import { EntityBase } from "../_shared";
import { UrbanVillage } from "../urban-village/urban-village.entity";
import { Shop } from "../shop/shop.entity";

@collection()
@route.controller()
export class ShopBranch extends EntityBase {
  @val.required()
  name: string;

  @val.mobilePhone({ locale: "id-ID" })
  phone: string;

  @val.required()
  address: string;

  @val.required()
  @collection.ref(UrbanVillage)
  urbanVillage: UrbanVillage;

  @val.required()
  active: boolean;

  @collection.ref((x) => Shop)
  shop: Shop;
}
