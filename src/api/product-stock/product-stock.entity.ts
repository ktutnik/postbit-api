import { collection } from "@plumier/mongoose";
import { route, val, authorize } from "plumier";
import { EntityBase } from "../_shared";
import { ProductVariant } from "../product-variant/product-variant.entity";
import { ShopBranch } from "../shop-branch/shop-branch.entity";
import { Product } from "../product/product.entity";

@collection()
@route.controller()
export class ProductStock extends EntityBase {
  @val.required()
  @collection.ref(Product)
  product: Product;

  @val.required()
  @collection.ref(ShopBranch)
  shopBranch: ShopBranch;

  @val.required()
  @collection.ref(ProductVariant)
  variant: ProductVariant;

  @val.required()
  stock: number;
}
