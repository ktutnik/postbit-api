import { collection } from "@plumier/mongoose";
import { route, val } from "plumier";
import { noop } from "tinspector";
import { EntityBase } from "../_shared";
import { Image } from "../image/image.entity";
import { ProductAttribute } from "../product-attribute/product-attribute.entity";
import { ProductCategory } from "../product-category/product-category.entity";
import { ProductVariant } from "../product-variant/product-variant.entity";

@collection()
export class PromoRange {
  @noop()
  startDate: Date;
  @noop()
  endDate: Date;
}

@collection()
export class Shipping {
  @noop()
  height: Number;
  @noop()
  width: Number;
  @noop()
  length: Number;
  @val.required()
  weight: Number;
}

@collection()
export class ProductImage {
  @val.required()
  key: Number;
  @noop()
  image: Image;
}

@collection()
export class Variant {
  @val.required()
  attribute: ProductAttribute;

  @val.required()
  variant: ProductVariant;
}

@collection()
export class ProductInventory extends EntityBase {
  @val.required()
  sku: string;

  @val.required()
  @collection.ref([Variant])
  variants: Variant[];

  @val.required()
  stock: Number;

  @val.required()
  sellPrice: Number;

  @val.required()
  basePrice: Number;
}

@collection()
export class Product extends EntityBase {
  @noop()
  @collection.ref(PromoRange)
  promoRange: PromoRange;

  @val.required()
  name: string;

  @val.required()
  @val.slug()
  slug: string;

  @noop()
  meta: string;

  @noop()
  description: string;

  @val.required()
  shipping: Shipping;

  @noop()
  @val.unique()
  sku: string;

  @noop()
  promoPrice: number;

  @val.required()
  sellPrice: number;

  @val.required()
  basePrice: number;

  @val.required()
  @collection.ref(ProductCategory)
  category: ProductCategory;

  @noop()
  @collection.ref(Image)
  cover: Image;

  @collection.ref([ProductImage])
  productGallery: ProductImage[];

  @route.controller()
  @val.required()
  @collection.ref([ProductInventory])
  inventories: ProductInventory[];

  @val.required()
  totalStock: Number;

  @val.required()
  @collection.property({ default: false })
  preorder: boolean;

  @val.required()
  @collection.property({ default: false })
  featured: boolean;

  @val.required()
  @collection.property({ default: true })
  visible: boolean;
}
