import { Request, Response } from "express";
import UserRepository from "../../../../shared/infra/database/repositories/UserRepository";
import CreateUserService from "../services/CreateUserService";
import LoginUserService from "../services/LoginUserService";

export default class UsersController {
  public async store(request: Request, response: Response): Promise<Response> {
    const { username, email, password } = request.body;

    const userRepository = new UserRepository();

    const createUserService = new CreateUserService(userRepository);

    const userToCreate = await createUserService.execute({
      username,
      email,
      password,
    });

    return response.status(200).json(userToCreate);
  }

  public async login(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const userRepository = new UserRepository();

    const loginUserService = new LoginUserService(userRepository);

    const msg = await loginUserService.execute({
      email,
      password,
    });

    if (msg === "Senha invalida") {
      return response.status(400).json({ msg });
    }
    if (msg === "Usuario nao encontrado") {
      return response.status(404).json({ msg });
    }

    return response.status(200).json({ msg });
  }
}
