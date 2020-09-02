import { collection } from "@plumier/mongoose";
import { route, val, authorize, bind } from "plumier";
import { noop } from "tinspector";
import { EntityBase } from "../_shared";
import { ProductStock } from "../product-stock/product-stock.entity";

class PromoRange {
  startDate: Date;
  endDate: Date;
}
@collection()
@route.controller()
export class Product extends EntityBase {
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
  sku: string;

  @noop()
  promoPrice: number;

  @val.required()
  sellPrice: number;

  @val.required()
  basePrice: number;

  @val.required()
  categoryId: string;

  @noop()
  photoCover: string;

  @noop()
  @collection.ref(PromoRange)
  promoRange: PromoRange;

  @val.required()
  attributeId: string;

  @val.required()
  @collection.property({ default: false })
  preorder: boolean;

  @val.required()
  @collection.property({ default: false })
  featured: boolean;

  @val.required()
  @collection.property({ default: true })
  visible: boolean;

  stocks: ProductStock[];
}
