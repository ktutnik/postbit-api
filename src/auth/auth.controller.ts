import bcrypt from "bcryptjs";
import { sign } from "jsonwebtoken";
import { HttpStatusError, route, authorize, bind } from "plumier";
import { collection, model } from "@plumier/mongoose";
import { type } from "tinspector";
import { LoginUser } from "../api/";
import { User } from "../api/user/user.entity";

export class AuthController {
  readonly userModel = model(User);

  @route.ignore()
  createTokens(user: User) {
    const token = sign(
      <LoginUser>{ userId: user.id, role: user.role },
      process.env.PLUM_JWT_SECRET || "fYA3#pM5cPSzRDgZ",
      { expiresIn: "30m" }
    );
    const refreshToken = sign(
      <LoginUser>{ userId: user.id, role: "RefreshToken" },
      process.env.PLUM_JWT_SECRET || "fYA3#pM5cPSzRDgZ",
      { expiresIn: "7d" }
    );
    return { token, refreshToken };
  }
  @authorize.public()
  @route.post()
  async login(email: string, password: string) {
    const user = await this.userModel.findOne({ email });
    if (user && (await bcrypt.compare(password, user.password))) {
      return this.createTokens(user);
    } else throw new HttpStatusError(403, "Invalid username or password");
  }

  @route.post()
  @authorize.role("RefreshToken")
  async refresh(@bind.user() user: LoginUser) {
    const saved = await this.userModel.findById(user.userId);
    if (!saved) throw new HttpStatusError(404, "User not found");
    return this.createTokens(saved);
  }

  @type(User)
  async me(@bind.user() user: LoginUser) {
    const saved = await this.userModel.findById(user.userId);
    if (!saved) throw new HttpStatusError(404, "User not found");
    return saved;
  }
}
