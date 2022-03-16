import { Gender } from './generated'

export interface UserData {
  readonly id: string
  readonly gender: Gender
  readonly firstName: string
  readonly middleName?: string
  readonly lastName: string
  readonly birthDate: Date
  readonly registered: Date
  readonly motherId?: string
  readonly fatherId?: string
  readonly spouseId?: string
}

export const usersRawData: readonly UserData[] = [
  {
    id: '1',
    gender: Gender.Male,
    firstName: 'Jefferey',
    lastName: 'Kreiger',
    birthDate: new Date(1983, 2, 18),
    registered: new Date(2019, 2, 18, 3, 25),
    spouseId: '2',
  },
  {
    id: '2',
    gender: Gender.Female,
    firstName: 'Tina',
    lastName: 'Kreiger',
    birthDate: new Date(1988, 4, 23),
    registered: new Date(2018, 9, 4, 12, 44, 45),
    spouseId: '1',
  },
  {
    id: '3',
    gender: Gender.Female,
    firstName: 'Selina',
    lastName: 'Kreiger',
    birthDate: new Date(2003, 4, 23),
    registered: new Date(2020, 11, 14, 23, 5, 12),
    motherId: '2',
    fatherId: '1',
  },
  {
    id: '4',
    gender: Gender.Male,
    firstName: 'Benedict',
    lastName: 'Ritchie',
    birthDate: new Date(2001, 7, 15),
    registered: new Date(2020, 11, 14, 11, 34, 42),
  },
]

export const userIndex: Readonly<Record<string, UserData>> =
  usersRawData.reduce((acc, user) => {
    acc[user.id] = user
    return acc
  }, {} as Record<string, UserData>)
