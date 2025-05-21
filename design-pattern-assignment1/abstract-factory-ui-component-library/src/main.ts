import { OSPlatform } from "./Utils/Enums/os-platform.enum";
import { UIComponentType } from "./Utils/Enums/ui-component.enum";
import { getUIFactory } from "./Utils/Helper/get-ui-factory.helper";

const platform: OSPlatform = OSPlatform.WINDOWS;
const uiFactory = getUIFactory(platform);

const button = uiFactory.createUIComponent(UIComponentType.button);
button.render();

const checkbox = uiFactory.createUIComponent(UIComponentType.checkbox);
checkbox.render();

const textField = uiFactory.createUIComponent(UIComponentType.textField);
textField.render();
