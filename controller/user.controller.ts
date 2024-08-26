import catchAsyncError from "../middlewares/catchAsyncError";
import error from "../middlewares/error";
import UserService from "../services/user.service";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { SALT_ROUNDS, SECRET_KEY } from "../config/config";
class UserController {
  private userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  async createUser(req: any, res: any) {
    console.log("in controller");
    return catchAsyncError(async () => {
      const hashedPassword = await bcrypt.hash(req.body.password, SALT_ROUNDS);
      const user = await this.userService.createUser({
        ...req.body,
        password: hashedPassword,
      });
      res.json(user);
    }, error);
  }

  async getUsers(req: any, res: any) {
    return catchAsyncError(async () => {
      const users = await this.userService.getUsers();
      res.json(users);
    }, error);
  }

  async getUser(req: any, res: any) {
    return catchAsyncError(async () => {
      const user = await this.userService.getUser(req.params.id);
      res.json(user);
    }, error);
  }

  async updateUser(req: any, res: any) {
    return catchAsyncError(async () => {
      const user = await this.userService.updateUser(req.params.id, req.body);
      res.json(user);
    }, error);
  }

  async deleteUser(req: any, res: any) {
    return catchAsyncError(async () => {
      await this.userService.deleteUser(req.params.id);
      res.json({ message: "User deleted successfully" });
    }, error);
  }

  async loginUser(req: any, res: any) {
    return catchAsyncError(async () => {
      const user = await this.userService.getUser(req.body.email);
      if (!user) return res.status(401).send("user not found");
      const isValidPassword = await bcrypt.compare(
        req.body.password,
        user.password
      );
      if (!isValidPassword)
        return res.status(401).send("Invalid email or password.");
      const token = jwt.sign({ _id: user._id }, SECRET_KEY);
      res.json({ token });
    }, error);
  }
}

export default UserController;
