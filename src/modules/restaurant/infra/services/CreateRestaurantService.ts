import RestaurantRepository from "../../../../shared/infra/database/repositories/RestaurantRepository";
import { IMenuDTO, IResturantDTO } from "../../dtos/IRestaurantDTO";

export interface ICreateResturant {
  menu: IMenuDTO[];
  name: string;
  phone: string;
  address: string;
  img: string;
}
export default class CreateRestaurantService {
  constructor(private restaurantRepository: RestaurantRepository) {
    this.restaurantRepository = new RestaurantRepository();
  }

  public async execute({
    menu,
    name,
    phone,
    address,
    img,
  }: ICreateResturant): Promise<IResturantDTO> {
    const restaurantToCreate = await this.restaurantRepository.createRestaurant(
      { menu, name, phone, address, img }
    );

    return restaurantToCreate;
  }
}
