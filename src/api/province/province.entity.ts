import { EntityBase } from "../_shared";
import model, { collection } from "@plumier/mongoose";
import { val, route } from "plumier";
import { Country } from "../country/country.entity";

@collection()
export class Province extends EntityBase {
  @val.required()
  name: string;

  @val.required()
  @collection.ref(Country)
  country: Country;
}
model(Province);
