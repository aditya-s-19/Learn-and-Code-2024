import { UIComponent } from "../../Interfaces/ui-component.interface";

export class MacOSButton implements UIComponent {
  render(): void {
    console.log("Rendering MacOS-style Button");
  }
}
