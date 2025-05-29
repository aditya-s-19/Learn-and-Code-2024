import { MacOSUIFactory } from "../../../Factories/mac-os-ui.factory";
import { WindowsUIFactory } from "../../../Factories/windows-ui.factory";
import { errorMessages } from "../../../Utils/Constants/error-messages";
import { OSPlatform } from "../../../Utils/Enums/os-platform.enum";
import { InvalidArgumentException } from "../../../Utils/Errors/invalid-argument.error";
import { getUIFactory } from "../../../Utils/Helper/get-ui-factory.helper";

describe("getUIFactory", () => {
  it("should return a WindowsUIFactory instance when OSPlatform.WINDOWS is passed", () => {
    const factory = getUIFactory(OSPlatform.WINDOWS);
    expect(factory).toBeInstanceOf(WindowsUIFactory);
  });

  it("should return a MacOSUIFactory instance when OSPlatform.MACOS is passed", () => {
    const factory = getUIFactory(OSPlatform.MACOS);
    expect(factory).toBeInstanceOf(MacOSUIFactory);
  });

  it("should throw an InvalidArgumentException for an invalid platform", () => {
    const invalidPlatform = "INVALID_PLATFORM" as OSPlatform;

    expect(() => {
      getUIFactory(invalidPlatform);
    }).toThrow(InvalidArgumentException);

    expect(() => {
      getUIFactory(invalidPlatform);
    }).toThrow(errorMessages.invalidPlatformType);
  });
});
