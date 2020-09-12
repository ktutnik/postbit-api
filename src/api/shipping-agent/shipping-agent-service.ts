import { EntityBase } from "../_shared";
import { collection } from "@plumier/mongoose";
import { route, val, bind } from "plumier";
import { noop } from "tinspector";
import { ShippingAgent } from "./shipping-agent.entity";

@collection()
export class ShippingAgentService extends EntityBase {
  @val.required()
  name: string;

  @noop()
  code: string; // api key

  @bind.query("pid")
  @collection.ref((x) => ShippingAgent)
  agent: ShippingAgent;
}
