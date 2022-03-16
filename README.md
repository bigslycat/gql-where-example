# Пример реализации `WHERE`-запроса на GraphQL

## Usage

- Сгенерировать код из GraphQL схемы: `yarn codegen`
- Запустить сервер: `yarn start`

## Файлы

- Точка входа: `src/server.ts`
- GraphQL схема: `src/Schema.gql`
- Сгенерированный из схемы код: `src/generated/graphql.ts`
- Ризолверы: `src/resolvers.ts`
- Сырые данные: `src/usersRawData.ts`
- Реализация фильтра по пользователям: `src/filters/createUsersFilter.ts`

## Пример запроса

```GraphQL
query {
  result1: users(
    where: {
      OR: [
        {
          AND: [
            { firstName: { operator: Contains, operands: ["e"] } }
            { firstName: { operator: Contains, operands: ["l"] } }
          ]
        }
        { firstName: { operator: StartsWith, operands: ["Ti"] } }
        { birthDate: { operator: LT, operand: "1985-03-16T00:00:00.0Z" } }
      ]
    }
  ) {
    firstName
    birthDate
  }

  result2: users(
    where: {
      AND: [
        { firstName: { operator: Contains, operands: ["c"] } }
        { lastName: { operator: Contains, operands: ["c"] } }
      ]
    }
  ) {
    firstName
    lastName
  }
}
```
