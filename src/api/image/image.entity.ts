import { EntityBase } from "../_shared";
import { collection, model } from "@plumier/mongoose";
import { val, route } from "plumier";
import { noop } from "tinspector";
import { Shop } from "../shop/shop.entity";

type ExtensionType = "jpg" | "png" | "jpeg";

@collection()
//@route.controller()
export class Image extends EntityBase {
  @val.required()
  name: string;

  @val.required()
  extension: ExtensionType;

  @val.required()
  description: string;

  @val.required()
  @collection.ref(Shop)
  shop: Shop;

  @noop()
  location: string;
}
model(Image);
