import {
  MongooseControllerGeneric,
  MongooseRepository,
  model,
} from "@plumier/mongoose";
import { api, authorize, route, val } from "plumier";
import { type, generic } from "tinspector";
import { Shop } from "./shop.entity";

@authorize.public()
@generic.type(Shop, String)
@route.ignore({ applyTo: "get" }) // disable existing base get by id
@api.tag("Shop")
export class ShopsController extends MongooseControllerGeneric<Shop, String> {
  @route.get(":id") // override base get with new one function
  @type(Shop)
  async getById(@val.mongoId() id: string) {
    const _repo = model(Shop);
    return await _repo.findById(id).populate({
      path: "urbanVillage",
      populate: {
        path: "subDistrict",
        populate: {
          path: "district",
          populate: {
            path: "province",
            populate: "country",
          },
        },
      },
    });
  }
}
