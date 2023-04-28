import RestaurantRepository from "../../../../shared/infra/database/repositories/RestaurantRepository";
import { IDetailMenu, IResturantDTO } from "../../dtos/IRestaurantDTO";

export default class ShowOneRestaurantService {
  constructor(private restaurantRepository: RestaurantRepository) {
    this.restaurantRepository = new RestaurantRepository();
  }

  public async execute({ id }: IDetailMenu): Promise<IResturantDTO | null> {
    const restaurant = await this.restaurantRepository.showOneRestaurant({
      id,
    });

    console.log(restaurant);
    return restaurant;
  }
}
