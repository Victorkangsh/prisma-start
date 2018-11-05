import { UserPreviousValuesResolvers } from '../generated/resolvers'
import { TypeMap } from './types/TypeMap'

export interface UserPreviousValuesParent {
  id: string
  createdAt: string
  updatedAt: string
  name: string
  password: string
}

export const UserPreviousValues: UserPreviousValuesResolvers.Type<TypeMap> = {
  id: parent => parent.id,
  createdAt: parent => parent.createdAt,
  updatedAt: parent => parent.updatedAt,
  name: parent => parent.name,
  password: parent => parent.password,
}
