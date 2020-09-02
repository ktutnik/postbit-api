import { EntityBase } from "../_shared";
import { collection } from "@plumier/mongoose";
import { route, val } from "plumier";
import { District } from "../district/district.entity";

@collection()
@route.controller()
export class SubDistrict extends EntityBase {
  @val.required()
  name: string;

  @val.required()
  @collection.ref(District)
  district: string;
}
