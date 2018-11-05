import { MutationResolvers } from '../generated/resolvers'
import { TypeMap } from './types/TypeMap'

export interface MutationParent {}

export const Mutation: MutationResolvers.Type<TypeMap> = {
  signup: (parent, args) => {
    throw new Error('Resolver not implemented')
  },
  login: (parent, args) => {
    throw new Error('Resolver not implemented')
  },
}
