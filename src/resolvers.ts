import { DateTimeResolver } from 'graphql-scalars'

import { createUsersFilter } from './filters'
import type { Resolvers } from './generated'
import { userList } from './userList'

export const resolvers: Resolvers = {
  Query: {
    async users(_, { where }) {
      const predicate = createUsersFilter(where)
      return userList.filter(predicate)
    },
  },
  Date: DateTimeResolver,
}
