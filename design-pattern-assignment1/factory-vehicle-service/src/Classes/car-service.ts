import { VehicleService } from "../Interfaces/vehicle-service.interface";

export class CarService implements VehicleService {
  public performService(): void {
    this.changeOil();
    this.inspectBrakes();
    this.checkTireRotation();
  }

  private changeOil(): void {
    console.log("Changing car oil...");
  }

  private inspectBrakes(): void {
    console.log("Inspecting car brakes...");
  }

  private checkTireRotation(): void {
    console.log("Checking car tire rotation...");
  }
}
