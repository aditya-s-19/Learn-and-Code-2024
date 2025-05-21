import { VehicleFactory } from "./Classes/vehicle-factory";
import { VehicleType } from "./Utils/Enums/vehicle-type.enum";

const carService = VehicleFactory.createVehicleService(VehicleType.CAR);
carService.performService();

const bikeService = VehicleFactory.createVehicleService(VehicleType.BIKE);
bikeService.performService();

const truckService = VehicleFactory.createVehicleService(VehicleType.TRUCK);
truckService.performService();
