import type { Maybe, StringFilter, StringFilterOperator } from '../generated'

import { or } from './or'

export function stingFilter(filter: StringFilter) {
  const operator = stingFilterOperators[filter.operator]
  const predicates = filter.operands.map(operator)
  const test = or(predicates)

  return (value: Maybe<string>) => !!value && test(value)
}

const stingFilterOperators: Readonly<
  Record<StringFilterOperator, (operand: string) => (value: string) => boolean>
> = {
  Contains: operand => value => value.indexOf(operand) !== -1,
  EndsWith: operand => value => value.endsWith(operand),
  Equals: operand => value => value === operand,
  StartsWith: operand => value => value.startsWith(operand),
}
