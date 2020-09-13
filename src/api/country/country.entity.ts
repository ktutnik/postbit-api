import { EntityBase } from "../_shared";
import { collection } from "@plumier/mongoose";
import { authorize, route, val } from "plumier";
import { Province } from "../province/province.entity";

@collection()
@route.controller()
@authorize.public()
export class Country extends EntityBase {
  @val.required()
  currency: string;

  @val.required()
  lang: string;

  @val.required()
  name: string;
}
