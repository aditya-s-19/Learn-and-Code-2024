import { MacOSUIFactory } from "../../Factories/mac-os-ui.factory";
import { WindowsUIFactory } from "../../Factories/windows-ui.factory";
import { AbstractUIFactory } from "../../Interfaces/abtract-ui-factory.interface";
import { errorMessages } from "../Constants/error-messages";
import { OSPlatform } from "../Enums/os-platform.enum";
import { InvalidArgumentException } from "../Errors/invalid-argument.error";

export function getUIFactory(platform: OSPlatform): AbstractUIFactory {
  switch (platform) {
    case OSPlatform.WINDOWS:
      return new WindowsUIFactory();
    case OSPlatform.MACOS:
      return new MacOSUIFactory();
    default:
      throw new InvalidArgumentException(errorMessages.invalidPlatformType);
  }
}
