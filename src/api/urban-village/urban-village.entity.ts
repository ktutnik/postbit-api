import { EntityBase } from "../_shared";
import { collection } from "@plumier/mongoose";
import { authorize, route, val } from "plumier";
import { SubDistrict } from "../sub-district/sub-district.entity";

@collection()
@route.controller()
export class UrbanVillage extends EntityBase {
  @val.required()
  name: string;

  @val.required()
  zipCode: number;

  @val.required()
  @collection.ref(SubDistrict)
  subDistrict: SubDistrict;
}
