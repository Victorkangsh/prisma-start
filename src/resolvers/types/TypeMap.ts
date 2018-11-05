import { ITypeMap } from '../../generated/resolvers'

import { QueryParent } from '../Query'
import { MutationParent } from '../Mutation'
import { SubscriptionParent } from '../Subscription'
import { AuthPayloadParent } from '../AuthPayload'
import { MutationResultParent } from '../MutationResult'
import { UserParent } from '../User'
import { UserSubscriptionPayloadParent } from '../UserSubscriptionPayload'
import { UserPreviousValuesParent } from '../UserPreviousValues'

import { Context } from './Context'

export interface TypeMap extends ITypeMap {
  Context: Context
  QueryParent: QueryParent
  MutationParent: MutationParent
  SubscriptionParent: SubscriptionParent
  AuthPayloadParent: AuthPayloadParent
  MutationResultParent: MutationResultParent
  UserParent: UserParent
  UserSubscriptionPayloadParent: UserSubscriptionPayloadParent
  UserPreviousValuesParent: UserPreviousValuesParent
}
