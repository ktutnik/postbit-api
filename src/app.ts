import Koa from "koa";
import Plumier, {
  Configuration,
  LoggerFacility,
  WebApiFacility,
  ControllerFacility,
  authorize,
} from "plumier";
import { MongooseFacility } from "@plumier/mongoose";
import { JwtAuthFacility } from "@plumier/jwt";
import { SwaggerFacility } from "@plumier/swagger";
import {
  CustomControllerGeneric,
  CustomOneToManyControllerGeneric,
} from "./api/_shared/";

export function createApp(config?: Partial<Configuration>): Promise<Koa> {
  return new Plumier()
    .set(config || {})
    .set(new WebApiFacility({ bodyParser: { multipart: true } }))
    .set(
      new ControllerFacility({
        controller: __dirname,
        directoryAsPath: false,
      })
    )
    .set(new LoggerFacility())
    .set(new SwaggerFacility())
    .set(
      new JwtAuthFacility({
        secret: process.env.JWT_SECRET || "fYA3#pM5cPSzRDgZ",
        global: authorize.public(),
      })
    )
    .set(
      new MongooseFacility({
        uri: process.env.MONGODB_URI || "mongodb://localhost:27017/postbit",
      })
    )
    .set({
      genericController: [
        CustomControllerGeneric,
        CustomOneToManyControllerGeneric,
      ],
    })
    .initialize();
}
