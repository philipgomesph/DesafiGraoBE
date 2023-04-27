import UserRepository from "../../../../shared/infra/database/repositories/UserRepository";
import { ICreateUserDTO } from "../../dtos/IUserDTO";

export interface ICreateUser {
  username: string;
  email: string;
  password: string;
}

export default class CreateUserService {
  constructor(private userRepository: UserRepository) {
    this.userRepository = new UserRepository();
  }

  public async execute({
    username,
    email,
    password,
  }: ICreateUser): Promise<ICreateUserDTO> {
    const userToCreate = await this.userRepository.createUser({
      username,
      email,
      password,
    });

    return userToCreate;
  }
}
