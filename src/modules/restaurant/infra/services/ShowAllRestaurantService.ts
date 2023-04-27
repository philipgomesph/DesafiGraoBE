import RestaurantRepository from "../../../../shared/infra/database/repositories/RestaurantRepository";
import { IResturantDTO } from "../../dtos/IRestaurantDTO";

export default class ShowAllRestaurantService {
  constructor(private restaurantRepository: RestaurantRepository) {
    this.restaurantRepository = new RestaurantRepository();
  }

  public async execute(): Promise<IResturantDTO[]> {
    const allRestaurant = await this.restaurantRepository.showAllRestaurant();

    return allRestaurant;
  }
}
