import type { DateFilter, Maybe } from '../generated'
import { dateFilter } from './dateFilter'

export function filterByDate<Prop extends string>(
  prop: Prop,
  filter: DateFilter,
) {
  const test = dateFilter(filter)

  return <Value extends Record<Prop, Maybe<Date>>>(value: Value) =>
    !!value[prop] && test(value[prop])
}
