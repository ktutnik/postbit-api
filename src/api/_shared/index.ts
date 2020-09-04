import EntityBase from "./entity-base";
import { LoginUser } from "./login-user";
import {
  CustomControllerGeneric,
  CustomOneToManyControllerGeneric,
} from "./generic.controller";
type UserRole = "User" | "Admin" | "ShopManager" | "Cashier";

export {
  EntityBase,
  UserRole,
  CustomControllerGeneric,
  CustomOneToManyControllerGeneric,
  LoginUser,
};
