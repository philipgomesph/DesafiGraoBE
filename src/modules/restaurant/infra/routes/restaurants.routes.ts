import { Router } from "express";
import RestaurantController from "../controllers/RestaurantController";

const restaurantRouter = Router();
const restaurantController = new RestaurantController();

restaurantRouter.get("/showall", restaurantController.index);
restaurantRouter.post("/create", restaurantController.store);
restaurantRouter.get("/detail/:id", restaurantController.show);
restaurantRouter.get("/namerestaurante/:id", restaurantController.showName);

export default restaurantRouter;
