import UserRepository from "../../../../shared/infra/database/repositories/UserRepository";

export interface ILoginUser {
  email: string;
  password: string;
}
export default class LoginUserService {
  constructor(private userRepository: UserRepository) {
    this.userRepository = new UserRepository();
  }

  public async execute({ email, password }: ILoginUser): Promise<string> {
    const login = await this.userRepository.loginUser({ email, password });

    console.log(login);
    return login;
  }
}
