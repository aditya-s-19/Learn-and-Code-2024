import { WindowsButton } from "../Components/Windows/windows-button";
import { WindowsCheckbox } from "../Components/Windows/windows-checkbox";
import { WindowsTextField } from "../Components/Windows/windows-text-field";
import { AbstractUIFactory } from "../Interfaces/abtract-ui-factory.interface";
import { UIComponent } from "../Interfaces/ui-component.interface";
import { errorMessages } from "../Utils/Constants/error-messages";
import { UIComponentType } from "../Utils/Enums/ui-component.enum";
import { InvalidArgumentException } from "../Utils/Errors/invalid-argument.error";

export class WindowsUIFactory implements AbstractUIFactory {
  createUIComponent(type: UIComponentType): UIComponent {
    switch (type) {
      case UIComponentType.button:
        return new WindowsButton();
      case UIComponentType.checkbox:
        return new WindowsCheckbox();
      case UIComponentType.textField:
        return new WindowsTextField();
      default:
        throw new InvalidArgumentException(
          errorMessages.invalidUIComponentType
        );
    }
  }
}
