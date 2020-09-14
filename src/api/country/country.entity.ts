import { EntityBase } from "../_shared";
import { collection, model } from "@plumier/mongoose";
import { authorize, route, val } from "plumier";

@collection()
@route.controller()
export class Country extends EntityBase {
  @val.required()
  currency: string;

  @val.required()
  lang: string;

  @val.required()
  name: string;
}

model(Country);
