import { UserSubscriptionPayloadResolvers } from '../generated/resolvers'
import { TypeMap } from './types/TypeMap'
import { UserParent } from './User'
import { UserPreviousValuesParent } from './UserPreviousValues'

export type MutationType = 'CREATED' | 'UPDATED' | 'DELETED'

export interface UserSubscriptionPayloadParent {
  mutation: MutationType
  node?: UserParent
  updatedFields: string[]
  previousValues?: UserPreviousValuesParent
}

export const UserSubscriptionPayload: UserSubscriptionPayloadResolvers.Type<
  TypeMap
> = {
  mutation: parent => parent.mutation,
  node: parent => null,
  updatedFields: parent => parent.updatedFields,
  previousValues: parent => null,
}
