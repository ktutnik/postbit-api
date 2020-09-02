import mongoose from "mongoose";
import { collection } from "@plumier/mongoose";
import { authorize, val, route } from "plumier";
import { EntityBase, UserRole } from "../_shared";
import { ownerOnly, checkConfirmPassword } from "./user.filter";
import { genSalt, hash } from "bcryptjs";

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

  role: UserRole;

  @collection.preSave()
  async beforeSave() {
    const salt = await genSalt();
    this.password = await hash(this.password, salt);
  }
}
