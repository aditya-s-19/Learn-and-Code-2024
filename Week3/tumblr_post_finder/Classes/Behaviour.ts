import { IBehavior } from "../Interfaces/IBehaviour";

export abstract class Behavior implements IBehavior {
  abstract execute(data: any): any;
}
