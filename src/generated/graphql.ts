import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null | undefined;
export type InputMaybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: Date;
};

export type DateFilter = {
  readonly operand: Scalars['Date'];
  readonly operator: DateFilterOperator;
};

export enum DateFilterOperator {
  Gt = 'GT',
  Gte = 'GTE',
  Lt = 'LT',
  Lte = 'LTE'
}

export enum Gender {
  Female = 'Female',
  Male = 'Male'
}

export type Query = {
  readonly __typename?: 'Query';
  readonly users: ReadonlyArray<Maybe<User>>;
};


export type QueryUsersArgs = {
  where?: InputMaybe<WhereArg>;
};

export type StringFilter = {
  readonly operands: ReadonlyArray<Scalars['String']>;
  readonly operator: StringFilterOperator;
};

export enum StringFilterOperator {
  Contains = 'Contains',
  EndsWith = 'EndsWith',
  Equals = 'Equals',
  StartsWith = 'StartsWith'
}

export type User = {
  readonly __typename?: 'User';
  readonly birthDate: Scalars['Date'];
  readonly children: ReadonlyArray<User>;
  readonly father?: Maybe<User>;
  readonly firstName: Scalars['String'];
  readonly gender: Gender;
  readonly id: Scalars['String'];
  readonly lastName: Scalars['String'];
  readonly middleName?: Maybe<Scalars['String']>;
  readonly mother?: Maybe<User>;
  readonly registered: Scalars['Date'];
  readonly spouse?: Maybe<User>;
};

export type WhereArg = {
  readonly AND?: InputMaybe<ReadonlyArray<WhereArg>>;
  readonly NOT?: InputMaybe<WhereArg>;
  readonly OR?: InputMaybe<ReadonlyArray<WhereArg>>;
  readonly birthDate?: InputMaybe<DateFilter>;
  readonly firstName?: InputMaybe<StringFilter>;
  readonly gender?: InputMaybe<Gender>;
  readonly lastName?: InputMaybe<StringFilter>;
  readonly middleName?: InputMaybe<StringFilter>;
  readonly registered?: InputMaybe<DateFilter>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Date: ResolverTypeWrapper<Scalars['Date']>;
  DateFilter: DateFilter;
  DateFilterOperator: DateFilterOperator;
  Gender: Gender;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']>;
  StringFilter: StringFilter;
  StringFilterOperator: StringFilterOperator;
  User: ResolverTypeWrapper<User>;
  WhereArg: WhereArg;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean'];
  Date: Scalars['Date'];
  DateFilter: DateFilter;
  Query: {};
  String: Scalars['String'];
  StringFilter: StringFilter;
  User: User;
  WhereArg: WhereArg;
};

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  users?: Resolver<ReadonlyArray<Maybe<ResolversTypes['User']>>, ParentType, ContextType, Partial<QueryUsersArgs>>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  birthDate?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  children?: Resolver<ReadonlyArray<ResolversTypes['User']>, ParentType, ContextType>;
  father?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  gender?: Resolver<ResolversTypes['Gender'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  middleName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mother?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  registered?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  spouse?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Date?: GraphQLScalarType;
  Query?: QueryResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
};

