import { collection } from "@plumier/mongoose";
import { route, val, bind } from "plumier";
import { EntityBase } from "../_shared";
import { ProductAttribute } from "../product-attribute/product-attribute.entity";

@collection()
@route.controller()
export class ProductVariant extends EntityBase {
  @val.required()
  name: string;

  @val.required()
  value: string;

  @val.required()
  @collection.ref(ProductAttribute)
  attribute: ProductAttribute;
}
