import mongoose from "mongoose";
import { collection } from "@plumier/mongoose";
import { authorize, val, route, bind } from "plumier";
import { EntityBase, UserRole } from "../_shared";
import { ownerOnly, checkConfirmPassword } from "./user.filter";
import { genSalt, hash } from "bcryptjs";
import { noop } from "tinspector";
import { Image } from "../image/image.entity";

@collection()
@checkConfirmPassword()
@route.controller()
export class User extends EntityBase {
  //@authorize.custom(ownerOnly, { access: "read" })
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

  @noop()
  imageId: string;

  @collection.ref(Image)
  image: Image;

  role: UserRole;

  @collection.preSave()
  async beforeSave() {
    const salt = await genSalt();
    this.password = await hash(this.password, salt);
  }
}
