export const or =
  <T>(predicates: ReadonlyArray<(value: T) => boolean>) =>
  (value: T) =>
    predicates.some(test => test(value))
