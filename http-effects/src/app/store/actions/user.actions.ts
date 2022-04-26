import { createAction, props } from "@ngrx/store";
import { User } from "src/app/models/user.model";

export const cargarUsuario = createAction(
    `[Usuario] CargarUsuario`,
    props<{ id: string }>()
);

export const loadUsersuccess = createAction(
    `[Usuario] Cargar Usuario Success`,
    props<{ usuario: User }>());

export const cargarUsuarioError = createAction(
    `[Usuario] Cargar Usuario Error`,
    props<{ payload: any }>());