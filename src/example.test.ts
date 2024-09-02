// example.test.ts
test('should add numbers', () => {
  const sum = (a: number, b: number): number => a + b;
  expect(sum(1, 2)).toBe(3);
});
