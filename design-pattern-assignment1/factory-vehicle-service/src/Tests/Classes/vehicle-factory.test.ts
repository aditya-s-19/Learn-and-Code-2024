import { VehicleFactory } from "../../Classes/vehicle-factory";
import { VehicleType } from "../../Utils/Enums/vehicle-type.enum";
import { CarService } from "../../Classes/car-service";
import { BikeService } from "../../Classes/bike-service";
import { TruckService } from "../../Classes/truck-service";
import { InvalidArgumentException } from "../../Utils/Errors/invalid-argument.error";
import { errorMessages } from "../../Utils/Constants/error-messages";

describe("VehicleFactory", () => {
  it("should create a CarService instance when VehicleType.CAR is passed", () => {
    const vehicleService = VehicleFactory.createVehicleService(VehicleType.CAR);
    expect(vehicleService).toBeInstanceOf(CarService);
  });

  it("should create a BikeService instance when VehicleType.BIKE is passed", () => {
    const vehicleService = VehicleFactory.createVehicleService(
      VehicleType.BIKE
    );
    expect(vehicleService).toBeInstanceOf(BikeService);
  });

  it("should create a TruckService instance when VehicleType.TRUCK is passed", () => {
    const vehicleService = VehicleFactory.createVehicleService(
      VehicleType.TRUCK
    );
    expect(vehicleService).toBeInstanceOf(TruckService);
  });

  it("should throw InvalidArgumentException for an invalid vehicle type", () => {
    const invalidType = "INVALID_TYPE" as VehicleType;

    expect(() => {
      VehicleFactory.createVehicleService(invalidType);
    }).toThrow(InvalidArgumentException);

    expect(() => {
      VehicleFactory.createVehicleService(invalidType);
    }).toThrow(errorMessages.invalidVehicleType);
  });
});
