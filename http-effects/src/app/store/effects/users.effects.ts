import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, Observable, of, tap } from "rxjs";
import { UserService } from "src/app/services/user.service";
import * as usersActions from "../actions";

@Injectable()
export class UsersEffects {

    constructor(
        private actions$: Actions,
        private usersService: UserService
    ) { }

    cargarUsuarios$ = createEffect(
        () => this.actions$.pipe(
            ofType(usersActions.cargarUsuarios),
            mergeMap(
                () => this.getUsers().pipe(
                    map( users => usersActions.cargarUsuariosSuccess({usuarios: users}) ),
                    catchError(error => of(usersActions.cargarUsuariosError({payload: error})))
                )
            ),
            

        )
    );

    getUsers(): Observable<any> {
        return this.usersService.getUsers();
    }



}