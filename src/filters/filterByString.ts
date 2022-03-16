import type { Maybe, StringFilter } from '../generated'
import { stingFilter } from './stingFilter'

export function filterByString<Prop extends string>(
  prop: Prop,
  filter: StringFilter,
) {
  const test = stingFilter(filter)

  return <Value extends Record<Prop, Maybe<string>>>(value: Value) =>
    !!value[prop] && test(value[prop])
}
