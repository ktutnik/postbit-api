import { collection } from "@plumier/mongoose";
import { route, val, authorize } from "plumier";
import { noop } from "tinspector";
import { EntityBase } from "../_shared";

@collection()
export class ShopTag extends EntityBase {
  @val.required()
  text: string;

  @val.required()
  @val.slug()
  slug: string;
}
