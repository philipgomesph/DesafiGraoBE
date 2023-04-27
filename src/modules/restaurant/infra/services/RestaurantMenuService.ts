import RestaurantRepository from "../../../../shared/infra/database/repositories/RestaurantRepository";
import { IDetailMenu, IResturantDTO } from "../../dtos/IRestaurantDTO";

export default class RestaurantMenuService {
  constructor(private restaurantRepository: RestaurantRepository) {
    this.restaurantRepository = new RestaurantRepository();
  }

  public async execute({ id }: IDetailMenu): Promise<IResturantDTO | null> {
    const menuRestaurant = await this.restaurantRepository.showMenu({ id });

    return menuRestaurant;
  }
}
