import { EntityBase } from "../_shared";
import { collection } from "@plumier/mongoose";
import { route, val } from "plumier";

@collection()
@route.controller()
export class UserShop extends EntityBase {
  @val.required()
  shopId: string;

  @val.required()
  userId: string;
}
