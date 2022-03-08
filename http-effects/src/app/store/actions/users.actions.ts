import { createAction, props } from "@ngrx/store";
import { User } from "src/app/models/user.model";

export const cargarUsuarios = createAction(`[Usuarios] CargarUsuarios`);

export const cargarUsuariosSuccess = createAction(
    `[Usuarios] Cargar Usuarios Success`,
    props<{ usuarios: User[] }>());

export const cargarUsuariosError = createAction(
    `[Usuarios] Cargar Usuarios Error`,
    props<{ payload: any }>());