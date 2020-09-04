import { collection } from "@plumier/mongoose";
import { route, val, authorize } from "plumier";
import { noop, reflect } from "tinspector";
import { EntityBase } from "../_shared";
import { UrbanVillage } from "../urban-village/urban-village.entity";
import { PaymentType } from "./payment-type.entity";
import { ChannelMarketing } from "./channel-marketing.entity";
import { ShippingAgent } from "./shipping-agent.entity";

@collection()
@route.controller()
@authorize.public()
export class Shop extends EntityBase {
  @val.required()
  name: string;

  @val.mobilePhone({ locale: "id-ID" })
  phone: string;

  @noop()
  tagline: string;

  @val.required()
  @val.email()
  email: string;

  @noop()
  logo: string;

  @noop()
  description: string;

  @val.required()
  address: string;

  @val.required()
  @collection.ref(UrbanVillage)
  urbanVillage: UrbanVillage;

  @route.controller()
  @collection.ref((x) => [PaymentType])
  payment: PaymentType[];

  @route.controller()
  @collection.ref((x) => [ChannelMarketing])
  marketing: ChannelMarketing[];

  @route.controller()
  @collection.ref((x) => [ShippingAgent])
  shippingAgent: ShippingAgent[];
}
