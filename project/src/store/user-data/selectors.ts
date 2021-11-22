import {NameSpace} from '../root-reducer';
import {State} from '../../types/state';
import {AuthorizationStatus} from '../../types/api';
import { User } from '../../types/user';

export const getAuthorizationStatus = (state: State): AuthorizationStatus => state[NameSpace.DataUser].authorizationStatus;
export const getUser = (state: State): User => state[NameSpace.DataUserUrl].userUrl;

