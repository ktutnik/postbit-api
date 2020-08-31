import { collection } from "@plumier/mongoose";
import { authorize, val, route } from "plumier";
import { EntityBase, UserRole } from "../_shared";
import { ownerOnly, checkConfirmPassword } from "./user.filter";

@collection()
@checkConfirmPassword()
@route.controller()
export class User extends EntityBase {
  @authorize.custom(ownerOnly, { access: "read" })
  @val.required()
  @val.email()
  @val.unique()
  email: string;

  @authorize.writeonly()
  @val.required()
  password: string;

  @val.required()
  firstName: string;

  @val.required()
  lastName: string;

  @authorize.role("Admin")
  role: UserRole;
}
