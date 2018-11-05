// This resolver file was scaffolded by github.com/prisma/graphqlgen, DO NOT EDIT.
// Please do not import this file directly but copy & paste to your application code.

import { Resolvers } from '../generated/graphqlgen'

import { Query } from './Query'
import { User } from './User'
import { Mutation } from './Mutation'
import { AuthPayload } from './AuthPayload'
import { Subscription } from './Subscription'
import { UserSubscriptionPayload } from './UserSubscriptionPayload'
import { UserPreviousValues } from './UserPreviousValues'
import { MutationResult } from './MutationResult'

export const resolvers: Resolvers = {
  Query,
  User,
  Mutation,
  AuthPayload,
  Subscription,
  UserSubscriptionPayload,
  UserPreviousValues,
  MutationResult,
}
