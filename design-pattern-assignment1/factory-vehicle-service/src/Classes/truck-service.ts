import { VehicleService } from "../Interfaces/vehicle-service.interface";

export class TruckService implements VehicleService {
  public performService(): void {
    this.runEngineDiagnostics();
    this.inspectCargo();
  }

  private runEngineDiagnostics(): void {
    console.log("Running heavy-duty engine diagnostics...");
  }

  private inspectCargo(): void {
    console.log("Inspecting truck cargo...");
  }
}
