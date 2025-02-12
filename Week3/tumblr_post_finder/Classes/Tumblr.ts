import { Behaviours } from "../Interfaces";
import { ITumblr } from "../Interfaces/ITumblr";
import { Behavior } from "./Behaviour";

class Tumblr implements ITumblr {
  public behaviors: Behaviours = {};

  registerBehavior(name: string, behavior: Behavior): void {
    this.behaviors[name] = behavior;
  }

  executeBehavior<T>(name: string, data: any): T {
    const behavior = this.behaviors[name];
    if (!behavior) {
      throw new Error(`Behavior '${name}' not found.`);
    }
    return behavior.execute(data) as T;
  }
}

export default Tumblr;
