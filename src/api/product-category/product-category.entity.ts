import { collection } from "@plumier/mongoose";
import { authorize, val } from "plumier";
import { EntityBase, UserRole } from "../_shared";

@collection()
export class User extends EntityBase {
  @val.required()
  name: string;

  @val.required()
  slug: string;

  @val.required()
  shopId: string;

  parentCategoryId: string;
}
