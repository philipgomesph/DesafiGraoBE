import { IUserDTO } from "../../../../modules/users/dtos/IUserDTO";
import { ILoginUser } from "../../../../modules/users/infra/services/LoginUserService";

export default interface IUserRepository {
  createUser({ username, email, password }: IUserDTO): Promise<string>;
  loginUser({ email, password }: ILoginUser): Promise<string>;
}
