import { errorMessages } from "../constants/error-messages";
import { InvalidArgumentException } from "../exceptions/invalid-argument.exception";

export class DivisorCounter {
  public static countSameDivisorCountPairs(max: number): number {
    if (max < 0 || !Number.isInteger(max)) {
      throw new InvalidArgumentException(errorMessages.invalidArgumentException);
    }
    if (max < 3) return 0;

    const divisorCounts = this.getDivisorCounts(max);
    let count = 0;
    for (let i = 0; i < max - 1; i++) {
      if (divisorCounts[i] === divisorCounts[i + 1]) {
        count++;
      }
    }
    return count;
  }

  private static getDivisorCounts(max: number): number[] {
    const divisorCounts = Array(max).fill(1);
    for (let i = 2; i <= max; i++) {
      for (let j = i; j <= max; j += i) {
        divisorCounts[j - 1]++;
      }
    }
    return divisorCounts;
  }
}
