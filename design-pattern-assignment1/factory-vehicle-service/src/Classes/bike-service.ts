import { VehicleService } from "../Interfaces/vehicle-service.interface";

export class BikeService implements VehicleService {
  public performService(): void {
    this.lubricateChain();
    this.tightenBrakes();
  }

  private lubricateChain(): void {
    console.log("Lubricating bike chain...");
  }

  private tightenBrakes(): void {
    console.log("Tightening bike brakes...");
  }
}
