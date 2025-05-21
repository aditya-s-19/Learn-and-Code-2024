import { UIComponent } from "../../Interfaces/ui-component.interface";

export class MacOSTextField implements UIComponent {
  render(): void {
    console.log("Rendering MacOS-style TextField");
  }
}
