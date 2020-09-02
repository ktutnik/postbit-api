import { collection } from "@plumier/mongoose";
import { route, val, authorize } from "plumier";
import { noop } from "tinspector";
import { EntityBase } from "../_shared";

@collection()
export class ProductStock extends EntityBase {
  @val.required()
  productId: string;

  @val.required()
  shopId: string;

  @val.required()
  variantId: string;

  @val.required()
  stock: number;
}
