import { Product } from "../classes/Product";
import { errorMessages } from "../common/constants/errors";

export class ProductModel {
  private static products: Map<string, Product> = new Map();

  public static set(product: Product): void {
    if (product instanceof Product && !this.products.has(product.id)) {
      this.products.set(product.id, product);
    } else {
      throw new Error(errorMessages.invalidInstance("Product"));
    }
  }

  public static get(productId: string): Product {
    if (typeof productId === "string" && this.products.has(productId)) {
      return this.products.get(productId) as Product;
    } else {
      throw new Error(errorMessages.instanceDoesNotExist("Product"));
    }
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
