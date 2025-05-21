import { UIComponentType } from "../Utils/Enums/ui-component.enum";
import { UIComponent } from "./ui-component.interface";

export interface AbstractUIFactory {
  createUIComponent(type: UIComponentType): UIComponent;
}
