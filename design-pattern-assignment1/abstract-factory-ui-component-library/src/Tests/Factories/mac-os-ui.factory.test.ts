import { MacOSButton } from "../../Components/MacOS/mac-os-button";
import { MacOSCheckbox } from "../../Components/MacOS/mac-os-checkbox";
import { MacOSTextField } from "../../Components/MacOS/mac-os-text-field";
import { MacOSUIFactory } from "../../Factories/mac-os-ui.factory";
import { errorMessages } from "../../Utils/Constants/error-messages";
import { UIComponentType } from "../../Utils/Enums/ui-component.enum";
import { InvalidArgumentException } from "../../Utils/Errors/invalid-argument.error";

describe("MacOSUIFactory", () => {
  let factory: MacOSUIFactory;

  beforeEach(() => {
    factory = new MacOSUIFactory();
  });

  it("should create a MacOSButton instance when UIComponentType.button is passed", () => {
    const component = factory.createUIComponent(UIComponentType.button);
    expect(component).toBeInstanceOf(MacOSButton);
  });

  it("should create a MacOSCheckbox instance when UIComponentType.checkbox is passed", () => {
    const component = factory.createUIComponent(UIComponentType.checkbox);
    expect(component).toBeInstanceOf(MacOSCheckbox);
  });

  it("should create a MacOSTextField instance when UIComponentType.textField is passed", () => {
    const component = factory.createUIComponent(UIComponentType.textField);
    expect(component).toBeInstanceOf(MacOSTextField);
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
