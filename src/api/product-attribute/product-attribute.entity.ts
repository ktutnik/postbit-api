import { collection } from "@plumier/mongoose";
import { route, val, authorize } from "plumier";
import { noop } from "tinspector";
import { EntityBase } from "../_shared";
import { ProductVariant } from "../product-variant/product-variant.entity";
import { Shop } from "../shop/shop.entity";

type AttributeType = "choose" | "color";
@collection()
export class ProductAttribute extends EntityBase {
  @val.required()
  name: string;

  @noop()
  summary: string;

  @val.required()
  type: AttributeType;

  @val.required()
  @collection.ref(Shop)
  shop: Shop;
}
