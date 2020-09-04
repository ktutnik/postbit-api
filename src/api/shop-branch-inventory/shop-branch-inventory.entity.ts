import { collection } from "@plumier/mongoose";
import { route, val } from "plumier";
import { EntityBase } from "../_shared";
import { ShopBranch } from "../shop-branch/shop-branch.entity";
import { Product, ProductInventory } from "../product/product.entity";

@collection()
@route.controller()
export class ShopBranchInventory extends EntityBase {
  @val.required()
  @collection.ref(ShopBranch)
  shopBranch: ShopBranch;

  @val.required()
  @collection.ref(Product)
  product: Product;

  @val.required()
  @collection.ref(ProductInventory)
  inventory: ProductInventory; //when update stock here, update stock also on inventory

  @val.required()
  stock: number;
}
