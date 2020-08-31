import { collection } from "@plumier/mongoose";
import { authorize, val } from "plumier";
import { EntityBase, UserRole } from "../_shared";
import { ownerOnly, checkConfirmPassword } from "./user.filter";

@collection()
@checkConfirmPassword()
export class User extends EntityBase {
  @authorize.custom(ownerOnly, { access: "read" })
  @val.required()
  @val.email()
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
