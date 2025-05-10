import { Product } from "../classes/Product";
import { errorMessages } from "../common/constants/errors";

export class ProductModel {
  private static products: Map<string, Product> = new Map();

  public static create(product: Product): void {
    if (!(product instanceof Product)) {
      throw new Error(errorMessages.invalidInstance("Product"));
    }

    if (this.products.has(product.id)) {
      throw new Error(errorMessages.alreadyExists("Product"));
    }

    this.products.set(product.id, product);
  }

  public static get(productId: string): Product {
    if (typeof productId === "string" && this.products.has(productId)) {
      return this.products.get(productId) as Product;
    } else {
      throw new Error(errorMessages.instanceDoesNotExist("Product"));
    }
  }

  public static update(product: Product): void {
    if (!(product instanceof Product)) {
      throw new Error(errorMessages.invalidInstance("Product"));
    }

    if (!this.products.has(product.id)) {
      throw new Error(errorMessages.instanceDoesNotExist("Product"));
    }

    this.products.set(product.id, product);
  }

  public static delete(productId: string): void {
    if (typeof productId === "string" && this.products.has(productId)) {
      this.products.delete(productId);
    } else {
      throw new Error(errorMessages.instanceDoesNotExist("Product"));
    }
  }

  public static getAll(): Product[] {
    return Array.from(this.products.values());
  }
}
