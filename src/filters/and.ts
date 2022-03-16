export const and =
  <T>(predicates: ReadonlyArray<(value: T) => boolean>) =>
  (value: T) =>
    predicates.every(test => test(value))
