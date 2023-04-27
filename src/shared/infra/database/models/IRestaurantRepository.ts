import { IResturantDTO } from "../../../../modules/restaurant/dtos/IRestaurantDTO";
import { ICreateResturant } from "../../../../modules/restaurant/infra/services/CreateRestaurantService";

export default interface IRestaurantRepository {
  createRestaurant({
    menu,
    name,
    phone,
    address,
    img,
  }: ICreateResturant): Promise<IResturantDTO>;

  showAllRestaurant(): Promise<IResturantDTO[]>;
}
