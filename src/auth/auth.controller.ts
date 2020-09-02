import bcrypt from "bcryptjs";
import { sign } from "jsonwebtoken";
import { HttpStatusError, route, authorize } from "plumier";
import { collection, model } from "@plumier/mongoose";
import { LoginUser } from "../api/";
import { User } from "../api/user/user.entity";

export class AuthController {
  @authorize.public()
  @route.post()
  async login(email: string, password: string) {
    const userModel = model(User);
    const user = await userModel.findOne({ email });
    if (user && (await bcrypt.compare(password, user.password))) {
      const token = sign(
        <LoginUser>{ userId: user.id, role: user.role },
        process.env.JWT_SECRET || "fYA3#pM5cPSzRDgZ"
      );
      return { token };
    } else throw new HttpStatusError(403, "Invalid username or password");
  }
}
