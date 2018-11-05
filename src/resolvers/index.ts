import { IResolvers } from '../generated/resolvers'
import { TypeMap } from './types/TypeMap'

import { Query } from './Query'
import { Mutation } from './Mutation'
import { Subscription } from './Subscription'
import { AuthPayload } from './AuthPayload'
import { MutationResult } from './MutationResult'
import { User } from './User'
import { UserSubscriptionPayload } from './UserSubscriptionPayload'
import { UserPreviousValues } from './UserPreviousValues'

export const resolvers: IResolvers<TypeMap> = {
  Query,
  Mutation,
  Subscription,
  AuthPayload,
  MutationResult,
  User,
  UserSubscriptionPayload,
  UserPreviousValues,
}
