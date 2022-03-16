import { UserAdapter } from './User'
import { usersRawData } from './usersRawData'

export const userList: readonly UserAdapter[] = usersRawData.map(
  UserAdapter.create,
)
