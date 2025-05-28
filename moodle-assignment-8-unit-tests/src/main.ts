import { DivisorCounter } from "./classes/divisor-counter";

const noOfTests = 5;
const valuesOfK = [3, 10, 15, 30, 100];

console.log("No. of Tests: ", noOfTests);

for (let i = 0; i < valuesOfK.length; i++) {
  const k = valuesOfK[i];
  const noOfSameDivisorCountPairs = DivisorCounter.countSameDivisorCountPairs(k);
  console.log(`K = ${k}, Total Divisor count pairs = ${noOfSameDivisorCountPairs}`);
}
