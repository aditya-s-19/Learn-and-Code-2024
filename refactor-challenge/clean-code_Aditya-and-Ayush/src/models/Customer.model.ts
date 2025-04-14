import { Customer } from "../classes/Customer";
import { errorMessages } from "../common/constants/errors";

export class CustomerModel {
  private static customers: Map<string, Customer> = new Map();

  public static set(customer: Customer): void {
    if (!(customer instanceof Customer)) {
      throw new Error(errorMessages.invalidInstance("Customer"));
    }

    if (this.customers.has(customer.id)) {
      throw new Error(errorMessages.alreadyExists("Customer"));
    }

    this.customers.set(customer.id, customer);
  }

  public static get(customerId: string): Customer {
    if (typeof customerId === "string" && this.customers.has(customerId)) {
      return this.customers.get(customerId) as Customer;
    } else {
      throw new Error(errorMessages.instanceDoesNotExist("Customer"));
    }
  }

  public static delete(customerId: string): void {
    if (typeof customerId === "string" && this.customers.has(customerId)) {
      this.customers.delete(customerId);
    } else {
      throw new Error(errorMessages.instanceDoesNotExist("Customer"));
    }
  }

  public static getAll(): Customer[] {
    return Array.from(this.customers.values());
  }
}
