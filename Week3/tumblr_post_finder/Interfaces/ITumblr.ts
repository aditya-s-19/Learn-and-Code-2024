import { Behaviors } from ".";
import { IBehavior } from "./IBehaviour";

export interface ITumblr {
  behaviors: Behaviors;
  // Includes all the optional functionalities (eg. PostFetcher)
  // note: Behaviors and IBehavior are seperate interfaces

  registerBehavior(name: string, behavior: IBehavior): void;

  executeBehavior<T>(name: string, data: any): T;
}
