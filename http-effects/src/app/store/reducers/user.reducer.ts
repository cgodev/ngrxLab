import { Action, createReducer, on, State } from "@ngrx/store";
import { User } from "src/app/models/user.model";
import { cargarUsuario, cargarUsuarioError, cargarUsuarioSuccess } from '../actions';

export interface UserState {
    id: string,
    user: User,
    loaded: boolean,
    loading: boolean,
    error: any
}

export const UserInitialState: UserState = {
    id: null,
    user: null,
    loaded: false,
    loading: false,
    error: null
}

const _UserReducer = createReducer(
    UserInitialState,
    on(cargarUsuario, (state, { id }) => ({ ...state, loading: true, id: id })),

    on(cargarUsuarioSuccess, (state, { usuario }) => ({ 
        ...state, 
        loading: false,
        loaded: true,
        user:  { ...usuario } 
    })),

    on(cargarUsuarioError, (state, { payload }) => ({ 
        ...state, 
        loading: false,
        loaded: false,
        user: null,
        error: {
            url: payload.url,
            name: payload.name,
            msj: payload.message
        }
    })),
);

export function userReducer(state: any, action: Action) {
    return _UserReducer(state, action);
}