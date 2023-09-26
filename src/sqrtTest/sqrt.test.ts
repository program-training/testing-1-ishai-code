import  getSqrt  from './sqrt';

describe("sqrt", () => {
  test("positive number", () => {
    const number = 25;
    const result = getSqrt(number);
    expect(result).toBe(5);
  });
  test("negative number", () => {
    const number = -5;
    expect(() => getSqrt(number)).toThrowError(
      "negative number is not aloud"
    );
  });
});