import { VehicleService } from "../Interfaces/vehicle-service.interface";
import { errorMessages } from "../Utils/Constants/error-messages";
import { VehicleType } from "../Utils/Enums/vehicle-type.enum";
import { InvalidArgumentException } from "../Utils/Errors/invalid-argument.error";
import { BikeService } from "./bike-service";
import { CarService } from "./car-service";
import { TruckService } from "./truck-service";

export class VehicleFactory {
  public static createVehicleService(type: VehicleType): VehicleService {
    switch (type) {
      case VehicleType.CAR:
        return new CarService();
      case VehicleType.BIKE:
        return new BikeService();
      case VehicleType.TRUCK:
        return new TruckService();
      default:
        throw new InvalidArgumentException(errorMessages.invalidVehicleType);
    }
  }
}
