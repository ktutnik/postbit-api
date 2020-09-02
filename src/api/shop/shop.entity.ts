import { collection } from "@plumier/mongoose";
import { route, val, authorize } from "plumier";
import { noop } from "tinspector";
import { EntityBase } from "../_shared";
import { ShopBranch } from "./shop-branch.entity";
import { ShopTag } from "./shop-tag.entity";

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
  countryId: string;

  @val.required()
  provinceId: string;

  @val.required()
  districtId: string;

  @val.required()
  subDistrictId: string;

  @val.required()
  urbanVillageId: string;

  @val.required()
  postCode: string;

  @route.controller()
  @collection.ref([ShopBranch])
  branches: ShopBranch[];

  @route.controller()
  @collection.ref([ShopTag])
  tags: ShopTag[];
}
