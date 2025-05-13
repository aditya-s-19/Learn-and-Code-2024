import { DivisorCounter } from "../../src/classes/divisor-counter";
import { InvalidArgumentException } from "../../src/exceptions/invalid-argument.exception";

describe("DivisorCounter.countSameDivisorCountPairs", () => {
  it("should throw InvalidArgumentException for invalid input", () => {
    expect(() => DivisorCounter.countSameDivisorCountPairs(-1)).toThrow(InvalidArgumentException);
    expect(() => DivisorCounter.countSameDivisorCountPairs(5.5)).toThrow(InvalidArgumentException);
  });

  it("should return 0 for max < 3 (no valid pairs)", () => {
    expect(DivisorCounter.countSameDivisorCountPairs(0)).toBe(0);
    expect(DivisorCounter.countSameDivisorCountPairs(1)).toBe(0);
    expect(DivisorCounter.countSameDivisorCountPairs(2)).toBe(0);
  });

  it("should correctly handle the smallest valid max = 3", () => {
    expect(DivisorCounter.countSameDivisorCountPairs(3)).toBe(1);
  });

  it("should handle small values up to max = 7", () => {
    expect(DivisorCounter.countSameDivisorCountPairs(4)).toBe(1);
    expect(DivisorCounter.countSameDivisorCountPairs(5)).toBe(1);
    expect(DivisorCounter.countSameDivisorCountPairs(6)).toBe(1);
    expect(DivisorCounter.countSameDivisorCountPairs(7)).toBe(1);
  });

  it("matches the example from the prompt (max = 15)", () => {
    expect(DivisorCounter.countSameDivisorCountPairs(15)).toBe(2);
  });

  it("correctly computes multiple intervals", () => {
    expect(DivisorCounter.countSameDivisorCountPairs(10)).toBe(1);
    expect(DivisorCounter.countSameDivisorCountPairs(20)).toBe(2);
    expect(DivisorCounter.countSameDivisorCountPairs(30)).toBe(4);
    expect(DivisorCounter.countSameDivisorCountPairs(50)).toBe(8);
    expect(DivisorCounter.countSameDivisorCountPairs(100)).toBe(15);
  });

  it("consecutive calls are independent", () => {
    const first = DivisorCounter.countSameDivisorCountPairs(50);
    const second = DivisorCounter.countSameDivisorCountPairs(30);
    expect(first).toBe(8);
    expect(second).toBe(4);
  });

  it("performance: should handle max up to 10^4 quickly", () => {
    const start = Date.now();
    const result = DivisorCounter.countSameDivisorCountPairs(10000);
    const duration = Date.now() - start;
    expect(result).toBeGreaterThanOrEqual(0);
    expect(duration).toBeLessThan(100);
  });

  it("performance: should handle max up to 10^6 within reasonable time", () => {
    const start = Date.now();
    const result = DivisorCounter.countSameDivisorCountPairs(1_000_000);
    const duration = Date.now() - start;
    expect(result).toBeGreaterThanOrEqual(0);
    expect(duration).toBeLessThan(1000);
  }, 20000);

  it("performance: should handle max up to 10^7 within reasonable time", () => {
    const start = Date.now();
    const result = DivisorCounter.countSameDivisorCountPairs(10_000_000);
    const duration = Date.now() - start;
    expect(result).toBeGreaterThanOrEqual(0);
    expect(duration).toBeLessThan(5000);
  }, 60000);
});
