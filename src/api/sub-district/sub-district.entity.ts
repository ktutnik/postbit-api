import { EntityBase } from "../_shared";
import { collection } from "@plumier/mongoose";
import { route, val } from "plumier";

@collection()
@route.controller()
export class SubDistrict extends EntityBase {
  @val.required()
  name: string;

  @val.required()
  districtId: string;
}
