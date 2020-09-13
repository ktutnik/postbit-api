import { CustomAuthorizerFunction as Auth } from "plumier";
import { val } from "plumier";
import { model } from "@plumier/mongoose";
import { User } from "./user.entity";
// filter specific property only owner of data can access the data
export const ownerOnly: Auth = ({ user, parentValue }) =>
  user.userId === parentValue.id;

export const checkConfirmPassword = () => {
  return val.custom((value) => {
    if (value.password !== value.confirmPassword)
      return val.result("confirmPassword", "Password doesn't match");
  });
};

export const unique = () => {
  return val.custom(async (value) => {
    const userModel = model(User);
    const user = await userModel.findOne(
      { email: value.email } && { shop: value.shop }
    );
    return user ? "Email already used" : undefined;
  });
};
