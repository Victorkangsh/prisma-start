import { UserResolvers } from '../generated/resolvers'
import { TypeMap } from './types/TypeMap'

export interface UserParent {
  id: string
  createdAt: string
  updatedAt: string
  name: string
  password: string
}

export const User: UserResolvers.Type<TypeMap> = {
  id: parent => parent.id,
  createdAt: parent => parent.createdAt,
  updatedAt: parent => parent.updatedAt,
  name: parent => parent.name,
  password: parent => parent.password,
}
