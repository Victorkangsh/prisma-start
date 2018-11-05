import { Prisma } from './generated/prisma-client';

export interface AuthPayload {
	token: string;
	user: any;
}

export interface MutationResult {
	success: boolean;
}
export interface User {
	id: string;
	name: string;
	password: string;
}

export interface Context {
	db: Prisma;
	request: any;
}

export interface AuthPayload {
	token: string;
	user: any;
}
export interface UserSubscriptionPayload {
	mutation: any;
	node: any | null;
	updatedFields: string[];
	previousValues: any | null;
}
export interface UserPreviousValues {
	id: string;
	createdAt: undefined;
	updatedAt: undefined;
	name: string;
	password: string;
}
export interface MutationResult {
	success: boolean;
}
