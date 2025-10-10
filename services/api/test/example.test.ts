import { expect, test } from "vitest";

function sum(a: number, b: number) {
  return a + b;
}

test("adds 1 + 2 to equal 3", () => {
  console.log("process.env");
  console.log(process.env.DATABASE_URL);
  expect(sum(1, 2)).toBe(3);
});
