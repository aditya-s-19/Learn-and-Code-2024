import { errorMessages } from "../constants/error-messages";
import { InvalidArgumentException } from "../exceptions/invalid-argument.exception";

export class DivisorCounter {
  public static countSameDivisorCountPairs(upperBound: number): number {
    if (upperBound < 0 || !Number.isInteger(upperBound) || upperBound > 10_000_000) {
      throw new InvalidArgumentException(errorMessages.invalidArgumentException);
    }
    if (upperBound < 3) return 0;

    const divisorCounts = this.getDivisorCounts(upperBound);
    let count = 0;
    for (let i = 0; i < upperBound - 1; i++) {
      if (divisorCounts[i] === divisorCounts[i + 1]) {
        count++;
      }
    }
    return count;
  }

  private static getDivisorCounts(upperBound: number): number[] {
    const divisorCounts = Array(upperBound).fill(1);
    for (let i = 2; i <= upperBound; i++) {
      for (let j = i; j <= upperBound; j += i) {
        divisorCounts[j - 1]++;
      }
    }
    return divisorCounts;
  }
}
