import { Router } from "express";
import UsersController from "../controllers/UsersController";

const userRouter = Router();
const userController = new UsersController();

userRouter.post("/", userController.store);
userRouter.get("/login", userController.login);

export default userRouter;
