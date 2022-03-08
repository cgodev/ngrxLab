import { ActionReducerMap } from '@ngrx/store';
import * as reducers from './reducers'


export interface AppState {
    usuarios: reducers.usuariosReducer,
}