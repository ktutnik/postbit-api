import { EntityBase } from "../_shared";
import { model, collection, proxy } from "@plumier/mongoose";
import { route, val } from "plumier";
import { Province } from "../province/province.entity";

@collection()
@route.controller()
export class District extends EntityBase {
  @val.required()
  name: string;

  @val.required()
  @collection.ref(Province)
  province: Province;
}
proxy(District);
