import { CategoryEnum } from "../common/enums/category.enum";

export class Product {
  id: string;
  name: string;
  price: number;
  description: string;
  category: CategoryEnum;
  stock: number;
  isActive: boolean;

  constructor(
    id: string,
    name: string,
    price: number,
    description: string,
    category: CategoryEnum,
    stock: number,
    isActive: boolean
  ) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.description = description;
    this.category = category;
    this.stock = stock;
    this.isActive = isActive;
  }
}
