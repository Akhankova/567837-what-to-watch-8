import { Token } from '../services/token';

export type UserFromServer = {
  id: number,
  email: string,
  name: string,
  'avatar_url'?: string,
  token: Token,
}

export type User = {
  id: number,
  email: string,
  name: string,
  avatarUrl: string,
  token: Token,
}
