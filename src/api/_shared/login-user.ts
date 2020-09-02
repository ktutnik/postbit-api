import reflect from "tinspector";
import { UserRole } from ".";

@reflect.parameterProperties()
export class LoginUser {
  constructor(public userId: string, public role: UserRole) {}
}
