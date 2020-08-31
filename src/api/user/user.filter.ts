import { CustomAuthorizerFunction as Auth } from "plumier";
import { val } from "plumier";
// filter specific property only owner of data can access the data
export const ownerOnly: Auth = ({ user, parentValue }) =>
  user.userId === parentValue.id;

export const checkConfirmPassword = () => {
  return val.custom((value) => {
    if (value.password !== value.confirmPassword)
      return val.result("confirmPassword", "Password doesn't match");
  });
};
