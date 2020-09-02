import { EntityBase } from "../_shared";
import { collection } from "@plumier/mongoose";
import { route, val } from "plumier";
import { Province } from "../province/province.entity";

@collection()
@route.controller()
export class Country extends EntityBase {
  @val.required()
  currency: string;

  @val.required()
  lang: string;

  @val.required()
  name: string;

  @route.controller()
  @collection.ref([Province])
  provinces: Province[];
}
