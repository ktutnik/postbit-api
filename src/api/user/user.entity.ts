import mongoose from "mongoose";
import { collection } from "@plumier/mongoose";
import { authorize, val, route, bind } from "plumier";
import { EntityBase, UserRole } from "../_shared";
import { ownerOnly, checkConfirmPassword } from "./user.filter";
import { genSalt, hash } from "bcryptjs";
import { noop } from "tinspector";
import { Image } from "../image/image.entity";
import { Shop } from "../shop/shop.entity";

@collection()
@checkConfirmPassword()
@authorize.public()
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

  @collection.ref(Image)
  image: Image;

  @collection.property({ default: "User" })
  @authorize.write("SuperAdmin", "Admin")
  role: UserRole;

  @val.required()
  @collection.ref(Shop)
  shop: Shop;

  @collection.preSave()
  async beforeSave() {
    const salt = await genSalt();
    this.password = await hash(this.password, salt);
  }
}
