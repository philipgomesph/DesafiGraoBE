import { Request, Response } from "express";
import ShowAllRestaurantService from "../services/ShowAllRestaurantService";
import CreateRestaurantService from "../services/CreateRestaurantService";
import RestaurantRepository from "../../../../shared/infra/database/repositories/RestaurantRepository";
import RestaurantMenuService from "../services/RestaurantMenuService";
import ShowOneRestaurantService from "../services/ShowOneRestaurantService";

export default class RestaurantController {
  public async index(request: Request, response: Response): Promise<Response> {
    const restaurantRepository = new RestaurantRepository();

    const allRestaurant = new ShowAllRestaurantService(restaurantRepository);

    const returnService = await allRestaurant.execute();
    return response.status(200).json(returnService);
  }

  public async store(request: Request, response: Response): Promise<any> {
    const { menu, name, phone, address, img } = request.body;
    const restaurantRepository = new RestaurantRepository();
    const createRestaurantService = new CreateRestaurantService(
      restaurantRepository
    );

    const restaurantTocreate = await createRestaurantService.execute({
      menu,
      name,
      phone,
      address,
      img,
    });

    return response.status(200).json({ restaurantTocreate });
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const restaurantRepository = new RestaurantRepository();
    const restaurantMenuService = new RestaurantMenuService(
      restaurantRepository
    );

    const menuDetail = await restaurantMenuService.execute({
      id,
    });

    if (!menuDetail) {
      return response.status(404).json("Menu not found");
    }
    return response.status(200).json(menuDetail?.menu);
  }

  public async showName(
    request: Request,
    response: Response
  ): Promise<Response> {
    const { id } = request.params;

    const restaurantRepository = new RestaurantRepository();
    const restaurantService = new ShowOneRestaurantService(
      restaurantRepository
    );
    const restaurant = await restaurantService.execute({
      id,
    });

    return response.status(200).json(restaurant);
  }
}
