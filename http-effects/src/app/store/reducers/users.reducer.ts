import { Action, createReducer, on, State } from "@ngrx/store";
import { User } from "src/app/models/user.model";
import { cargarUsuarios, cargarUsuariosError, cargarUsuariosSuccess } from '../actions';

export interface UsersState {
    users: User[],
    loaded: boolean,
    loading: boolean,
    error: any
}

export const usersInitialState: UsersState = {
    users: [],
    loaded: false,
    loading: false,
    error: null
}

const _usersReducer = createReducer(
    usersInitialState,
    on(cargarUsuarios, state => ({ ...state, loading: true })),

    on(cargarUsuariosSuccess, (state, { usuarios }) => ({ 
        ...state, 
        loading: false,
        loaded: true,
        users: [ ...usuarios ] 
    })),

    on(cargarUsuariosError, (state, { payload }) => ({ 
        ...state, 
        loading: false,
        loaded: false,
        users: [],
        error: {
            url: payload.url,
            name: payload.name,
            msj: payload.message
        }
    })),
);

export function usersReducer(state: any, action: Action) {
    return _usersReducer(state, action);
}