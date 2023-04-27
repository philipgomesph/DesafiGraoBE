import { Router } from "express";
import restaurantRouter from "../../../../modules/restaurant/infra/routes/restaurants.routes";
import userRouter from "../../../../modules/users/infra/routes/users.routes";

const routes = Router();

routes.use("/restaurant", restaurantRouter);
routes.use("/users", userRouter);
export default routes;
