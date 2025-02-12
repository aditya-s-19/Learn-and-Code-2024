import { Behaviours } from ".";
import { IBehavior } from "./IBehaviour";

export interface ITumblr {
  behaviors: Behaviours;

  registerBehavior(name: string, behavior: IBehavior): void;

  executeBehavior<T>(name: string, data: any): T;
}
