import { WindowsButton } from "../../Components/Windows/windows-button";
import { WindowsCheckbox } from "../../Components/Windows/windows-checkbox";
import { WindowsTextField } from "../../Components/Windows/windows-text-field";
import { WindowsUIFactory } from "../../Factories/windows-ui.factory";
import { errorMessages } from "../../Utils/Constants/error-messages";
import { UIComponentType } from "../../Utils/Enums/ui-component.enum";
import { InvalidArgumentException } from "../../Utils/Errors/invalid-argument.error";

describe("WindowsUIFactory", () => {
  let factory: WindowsUIFactory;

  beforeEach(() => {
    factory = new WindowsUIFactory();
  });

  it("should create a WindowsButton instance when UIComponentType.button is passed", () => {
    const component = factory.createUIComponent(UIComponentType.button);
    expect(component).toBeInstanceOf(WindowsButton);
  });

  it("should create a WindowsCheckbox instance when UIComponentType.checkbox is passed", () => {
    const component = factory.createUIComponent(UIComponentType.checkbox);
    expect(component).toBeInstanceOf(WindowsCheckbox);
  });

  it("should create a WindowsTextField instance when UIComponentType.textField is passed", () => {
    const component = factory.createUIComponent(UIComponentType.textField);
    expect(component).toBeInstanceOf(WindowsTextField);
  });

  it("should throw an InvalidArgumentException for an invalid component type", () => {
    const invalidType = "INVALID_TYPE" as UIComponentType;

    expect(() => {
      factory.createUIComponent(invalidType);
    }).toThrow(InvalidArgumentException);

    expect(() => {
      factory.createUIComponent(invalidType);
    }).toThrow(errorMessages.invalidUIComponentType);
  });
});
