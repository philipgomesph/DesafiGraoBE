export interface IMenuDTO {
  menuName: string;
  description: string;
  price: number;
}
export interface IResturantDTO {
  taxId: string;
  menu: IMenuDTO[];
  name: string;
  phone: string;
  address: string;
  img: string;
}

export interface IDetailMenu {
  id: string;
}
