import { EntityBase } from "../_shared";
import { val } from "plumier";
import { noop } from "tinspector";
import { collection } from "@plumier/mongoose";
import { UrbanVillage } from "../urban-village/urban-village.entity";

export class Supplier extends EntityBase {
  @val.required()
  name: string;

  @val.required()
  @val.unique()
  code: string;

  @val.mobilePhone({ locale: "id-ID" })
  phone: string;

  @noop()
  address: string;

  @noop()
  @collection.ref(UrbanVillage)
  urbanVillage: UrbanVillage;
}
