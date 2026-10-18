
const { lateFee } = require("./lateFee");

describe("lateFee — варіант 5, Буй", () => {
  test("повертає 0 грн за нуль днів прострочення", () => {
    expect(lateFee(0, 10)).toBe(0);
  });

  test("обчислює плату за три дні прострочення", () => {
    expect(lateFee(3, 10)).toBe(30);
  });

  test("обмежує плату максимумом 100 грн", () => {
    expect(lateFee(20, 10)).toBe(100);
  });

  test("відхиляє від'ємну кількість днів", () => {
    expect(() => lateFee(-1, 10)).toThrow();
  });

  test("відхиляє дробову кількість днів", () => {
    expect(() => lateFee(1.5, 10)).toThrow();
  });

  test("відхиляє від'ємну денну ставку", () => {
    expect(() => lateFee(3, -10)).toThrow();
  });

  test("повертає 100 грн, якщо плата дорівнює ліміту", () => {
    expect(lateFee(10, 10)).toBe(100);
  });
});
