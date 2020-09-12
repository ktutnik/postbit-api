import { EntityBase } from "../_shared";
import { collection } from "@plumier/mongoose";
import { val, bind, route } from "plumier";
import { noop } from "tinspector";

@collection()
@route.controller()
export class ShippingAgent extends EntityBase {
  @val.required()
  name: string;

  @noop()
  code: string;
}
