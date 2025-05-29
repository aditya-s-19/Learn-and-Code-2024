import { MacOSButton } from "../Components/MacOS/mac-os-button";
import { MacOSCheckbox } from "../Components/MacOS/mac-os-checkbox";
import { MacOSTextField } from "../Components/MacOS/mac-os-text-field";
import { UIFactory } from "../Interfaces/ui-factory.interface";
import { UIComponent } from "../Interfaces/ui-component.interface";
import { errorMessages } from "../Utils/Constants/error-messages";
import { UIComponentType } from "../Utils/Enums/ui-component.enum";
import { InvalidArgumentException } from "../Utils/Errors/invalid-argument.error";

export class MacOSUIFactory implements UIFactory {
  createUIComponent(type: UIComponentType): UIComponent {
    switch (type) {
      case UIComponentType.button:
        return new MacOSButton();
      case UIComponentType.checkbox:
        return new MacOSCheckbox();
      case UIComponentType.textField:
        return new MacOSTextField();
      default:
        throw new InvalidArgumentException(errorMessages.invalidUIComponentType);
    }
  }
}
