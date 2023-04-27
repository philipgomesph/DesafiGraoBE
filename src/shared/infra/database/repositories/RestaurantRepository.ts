import { v4 as uuidv4 } from "uuid";
import {
  IDetailMenu,
  IResturantDTO,
} from "../../../../modules/restaurant/dtos/IRestaurantDTO";
import Restaurant from "../models/RestaurantSchema";
import { ICreateResturant } from "../../../../modules/restaurant/infra/services/CreateRestaurantService";
import AppError from "../../../errors/AppError";

export default class RestaurantRepository {
  async createRestaurant({
    menu,
    name,
    phone,
    address,
    img,
  }: ICreateResturant): Promise<IResturantDTO> {
    const restaurantToCreate: IResturantDTO = await Restaurant.create({
      _id: uuidv4(),
      menu,
      name,
      phone,
      address,
      img,
    });

    return restaurantToCreate;
  }

  async showAllRestaurant(): Promise<IResturantDTO[]> {
    const allRestaurant: IResturantDTO[] = await Restaurant.find();

    return allRestaurant;
  }

  async showMenu({ id }: IDetailMenu): Promise<IResturantDTO | null> {
    try {
      const oneRestaurant: IResturantDTO | null = await Restaurant.findOne({
        _id: id,
      });

      if (!oneRestaurant) {
        return null;
      }
      return oneRestaurant;
    } catch (error) {
      console.error("Error finding Restaurant by name\nError: ", error);

      throw new AppError(`Error finding Restaurant by name ${error}`);
    }
  }
}
