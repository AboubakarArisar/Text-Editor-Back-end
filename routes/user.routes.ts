import express from "express";
import UserController from "../controller/user.controller";

const router = express.Router();
const userController = new UserController();

router.post("/", userController.createUser);
router.post("/login", userController.loginUser);
router.get("/", userController.getUsers);
router.get("/:id", userController.getUser);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);

export default router;
