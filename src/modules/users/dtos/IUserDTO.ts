export interface IUserDTO {
  taxId: string;
  username: string;
  email: string;
  password: string;
}

export interface ICreateUserDTO {
  username: string;
  email: string;
  password: string;
}
