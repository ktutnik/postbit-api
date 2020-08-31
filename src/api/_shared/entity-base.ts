import { authorize } from "plumier";
import { collection } from "@plumier/mongoose";

@collection({ timestamps: true, toJSON: { virtuals: true } })
export default class EntityBase {
  @authorize.readonly()
  id: string;

  @authorize.readonly()
  createdAt: Date;

  @authorize.readonly()
  updatedAt: Date;

  @collection.property({ default: false })
  deleted: boolean;
}
