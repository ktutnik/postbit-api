import { EntityBase } from "../_shared";
import { collection, model } from "@plumier/mongoose";
import { val, route } from "plumier";
import { noop } from "tinspector";

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
  shopId: string;

  @noop()
  location: string;
}
model(Image);
