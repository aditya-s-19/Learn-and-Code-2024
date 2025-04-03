import { CategoryEnum } from "../common/enums/category.enum";

export interface IProduct {
  id: string;
  name: string;
  price: number;
  description: string;
  category: CategoryEnum;
  stock: number;
  isActive: boolean;
}
