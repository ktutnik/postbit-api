import { EntityBase } from "../_shared";
import { collection } from "@plumier/mongoose";
import { val, route } from "plumier";

@collection()
@route.controller()
export class Province extends EntityBase {
  @val.required()
  name: string;

  @val.required()
  countryId: string;
}
