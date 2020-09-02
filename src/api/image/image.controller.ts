import { MongooseControllerGeneric } from "@plumier/mongoose";
import { FormFile, route } from "plumier";
import { type } from "tinspector";
import { v1 } from "uuid";

import { Image } from "./image.entity";
import { uploadToS3 } from "../../helper/";

@route.ignore({ applyTo: "save" })
export class ImageController extends MongooseControllerGeneric<Image, string> {
  @route.post("")
  @type({ id: String })
  async saveWithImage(file: FormFile, data: Image) {
    const buf = Buffer.from(file);
    const { type } = file;
    const filename = `${v1()}.${type}`;
    const location = await uploadToS3(filename, buf);
    data.location = location;
    return this.repo.insert(data);
  }
}
