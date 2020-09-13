import { collection, MongooseControllerGeneric } from "@plumier/mongoose";
import { authorize, route } from "plumier";
import { type, generic } from "tinspector";

import { Province } from "./province.entity";
import { Country } from "../country/country.entity";

@authorize.public()
@generic.type(Province, String)
export class ProvincesController extends MongooseControllerGeneric<
  Province,
  String
> {
  @route.get("byCountry") // override base save with new one function
  @type({ id: String })
  async getByCountry(country: any) {
    return await this.repo.find(0, 1000, { country: country });
  }
}
