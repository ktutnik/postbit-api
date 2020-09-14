import { collection, MongooseControllerGeneric } from "@plumier/mongoose";
import { authorize, bind, route, val } from "plumier";
import { type, generic } from "tinspector";
import { Province } from "./province.entity";

@authorize.public()
@generic.type(Province, String)
export class ProvincesController extends MongooseControllerGeneric<
  Province,
  String
> {
  @route.get("byCountry")
  @type([Province])
  async getByCountry(@val.mongoId() country: string) {
    return this.repo.find(0, 1000, { country: country as any });
  }
}
