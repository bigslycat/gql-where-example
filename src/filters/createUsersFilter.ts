import { propEq } from 'ramda'
import type { Maybe, WhereArg } from '../generated'
import type { UserAdapter } from '../User'

import { and } from './and'
import { filterByDate } from './filterByDate'
import { filterByString } from './filterByString'
import { not } from './not'
import { or } from './or'

export function createUsersFilter(where: Maybe<WhereArg>) {
  const {
    firstName,
    middleName,
    lastName,
    gender,
    birthDate,
    registered,
    NOT,
    AND,
    OR,
  } = where || {}

  const andConditions: Array<(user: UserAdapter) => boolean> = []
  const orConditions: Array<(user: UserAdapter) => boolean> = []

  if (firstName) andConditions.push(filterByString('firstName', firstName))
  if (middleName) andConditions.push(filterByString('middleName', middleName))
  if (lastName) andConditions.push(filterByString('lastName', lastName))

  if (gender) andConditions.push(propEq('gender', gender))

  if (birthDate) andConditions.push(filterByDate('birthDate', birthDate))
  if (registered) andConditions.push(filterByDate('registered', registered))

  if (NOT) andConditions.push(not(createUsersFilter(NOT)))
  if (AND) andConditions.push(and(AND.map(createUsersFilter)))

  if (andConditions.length) orConditions.push(and(andConditions))

  if (OR) orConditions.push(or(OR.map(createUsersFilter)))

  if (orConditions.length) return or(orConditions)

  return () => true
}
