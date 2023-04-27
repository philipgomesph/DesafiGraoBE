import { v4 as uuidv4 } from "uuid";
import { ICreateUserDTO } from "../../../../modules/users/dtos/IUserDTO";
import User from "../models/UserSchema";
import { ILoginUser } from "../../../../modules/users/infra/services/LoginUserService";
import { log } from "console";

export default class UserRepository {
  async createUser({
    username,
    email,
    password,
  }: ICreateUserDTO): Promise<ICreateUserDTO> {
    const user: ICreateUserDTO = await User.create({
      _id: uuidv4(),
      username,
      email,
      password,
    });
    return user;
  }

  async loginUser({ email, password }: ILoginUser): Promise<string> {
    const login = await User.find({ email });

    const usuario = login[0];
    console.log(usuario);

    if (!login || !usuario) {
      return "Usuario nao encontrado";
    }
    if (usuario.password !== password) {
      return "Senha invalida";
    }

    return "Usuario logado com sucesso";
  }
}
