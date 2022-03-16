import { Gender, Maybe, User } from './generated'
import { UserData, userIndex, usersRawData } from './usersRawData'

/**
 * Адаптер для IUser, созданный для ленивого доступа к рекурсивным полям,
 * чтобы избежать переполнения стека вызовов из-за бесконечного создания
 * вложенных структур.
 */
export class UserAdapter implements User {
  static create = (data: UserData) => new UserAdapter(data)

  constructor(private data: UserData) {}

  get __typename() {
    return 'User' as const
  }

  get id() {
    return this.data.id
  }

  get gender() {
    return this.data.gender
  }

  get firstName() {
    return this.data.firstName
  }

  get middleName() {
    return this.data.middleName
  }

  get lastName() {
    return this.data.lastName
  }

  get birthDate() {
    return this.data.birthDate
  }

  get registered() {
    return this.data.registered
  }

  get children(): readonly User[] {
    return usersRawData
      .filter(
        this.gender === Gender.Male
          ? (user: UserData) => user.fatherId === this.id
          : (user: UserData) => user.motherId === this.id,
      )
      .map(UserAdapter.create)
  }

  get mother(): Maybe<User> {
    const { motherId } = this.data
    if (!motherId) return null
    const data = userIndex[motherId] || null
    return data && new UserAdapter(data)
  }

  get father(): Maybe<User> {
    const { fatherId } = this.data
    if (!fatherId) return null
    const data = userIndex[fatherId] || null
    return data && new UserAdapter(data)
  }

  get spouse(): Maybe<User> {
    const { spouseId } = this.data
    if (!spouseId) return null
    const data = userIndex[spouseId] || null
    return data && new UserAdapter(data)
  }
}
