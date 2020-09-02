import { collection } from "@plumier/mongoose";
import { route, val, authorize } from "plumier";
import { noop } from "tinspector";
import { EntityBase } from "../_shared";

@collection()
export class ShopBranch extends EntityBase {
  @val.required()
  name: string;

  @val.mobilePhone({ locale: "id-ID" })
  phone: string;

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
  active: boolean;
}
