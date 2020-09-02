import { collection } from "@plumier/mongoose";
import { route, val, authorize } from "plumier";
import { noop } from "tinspector";
import { EntityBase } from "../_shared";
import { ShopBranch } from "./shop-branch.entity";
import { ShopTag } from "./shop-tag.entity";
import { SubDistrict } from "../sub-district/sub-district.entity";
import { UrbanVillage } from "../urban-village/urban-village.entity";

@collection()
@route.controller()
@authorize.public()
export class Shop extends EntityBase {
  @val.required()
  name: string;

  @val.mobilePhone({ locale: "id-ID" })
  phone: string;

  @noop()
  tagline: string;

  @val.required()
  @val.email()
  email: string;

  @noop()
  logo: string;

  @noop()
  description: string;

  @val.required()
  address: string;

  @val.required()
  @collection.ref(UrbanVillage)
  urbanVillage: UrbanVillage;

  @route.controller()
  @collection.ref([ShopBranch])
  branches: ShopBranch[];

  @route.controller()
  @collection.ref([ShopTag])
  tags: ShopTag[];
}
