import type { DateFilter, DateFilterOperator, Maybe } from '../generated'

export function dateFilter(filter: DateFilter) {
  const operator = operators[filter.operator]
  const test = operator(filter.operand)

  return (value: Maybe<Date>) => !!value && test(value)
}

const operators: Readonly<
  Record<DateFilterOperator, (operand: Date) => (value: Date) => boolean>
> = {
  GT: operand => value => value > operand,
  GTE: operand => value => value === operand || value > operand,
  LT: operand => value => value < operand,
  LTE: operand => value => value === operand || value < operand,
}
