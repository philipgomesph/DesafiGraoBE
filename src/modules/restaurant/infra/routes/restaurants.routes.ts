import { Router } from "express";
import RestaurantController from "../controllers/RestaurantController";

const restaurantRouter = Router();
const restaurantController = new RestaurantController();

restaurantRouter.get("/showall", restaurantController.index);
restaurantRouter.post("/create", restaurantController.store);
restaurantRouter.get("/detail/:id", restaurantController.show);

export default restaurantRouter;
