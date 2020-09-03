import { collection } from "@plumier/mongoose";
import { route, val, authorize, bind } from "plumier";
import { noop, reflect } from "tinspector";
import { EntityBase } from "../_shared";
import { Image } from "../image/image.entity";
import { ProductAttribute } from "../product-attribute/product-attribute.entity";
import { ProductCategory } from "../product-category/product-category.entity";

@collection()
export class PromoRange {
  @noop()
  startDate: Date;
  @noop()
  endDate: Date;
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

  @noop()
  height: number;

  @noop()
  length: number;

  @noop()
  width: number;

  @noop()
  weight: number;

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

  @val.required()
  @collection.ref(ProductAttribute)
  attribute: ProductAttribute;

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
