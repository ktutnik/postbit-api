import { EntityBase } from "../_shared";
import { collection } from "@plumier/mongoose";
import { route, val } from "plumier";

@collection()
@route.controller()
export class UrbanVillage extends EntityBase {
  @val.required()
  name: string;

  @val.required()
  zipCode: number;

  @val.required()
  subDistrictId: string;
}
