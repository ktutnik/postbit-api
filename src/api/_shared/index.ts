import EntityBase from "./entity-base";
import { LoginUser } from "./login-user";
import {
  CustomControllerGeneric,
  CustomOneToManyControllerGeneric,
} from "./generic.controller";
type UserRole = "User" | "Admin" | "Manager" | "Cashier";
type PaymentType = "Cash" | "CreditCard" | "DebitCard" | "Debt";

export {
  EntityBase,
  UserRole,
  CustomControllerGeneric,
  CustomOneToManyControllerGeneric,
  LoginUser,
  PaymentType,
};
