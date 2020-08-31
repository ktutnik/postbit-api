import { authorize } from "plumier";

export default class EntityBase {
  @authorize.readonly()
  id: string;

  @authorize.readonly()
  createdAt: Date;

  @authorize.readonly()
  updatedAt: Date;
}
