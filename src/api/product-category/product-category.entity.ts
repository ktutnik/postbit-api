import { collection } from "@plumier/mongoose";
import { route, val, authorize } from "plumier";
import { noop } from "tinspector";
import { EntityBase } from "../_shared";

@collection()
@route.controller()
@authorize.public()
export class ProductCategory extends EntityBase {
  @val.required()
  name: string;

  @val.required()
  @val.slug()
  slug: string;

  @val.required()
  shopId: string;

  @noop()
  parentCategoryId: string;
}
