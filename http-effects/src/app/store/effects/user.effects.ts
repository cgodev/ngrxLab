import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, Observable, of, tap } from "rxjs";
import { UserService } from "src/app/services/user.service";
import * as userActions from "../actions";

@Injectable()
export class UserEffects {

    constructor(
        private actions$: Actions,
        private usersService: UserService
    ) { }

    cargarUsuario$ = createEffect(
        () => this.actions$.pipe(
            ofType(userActions.cargarUsuario),
            mergeMap(
                ( action ) => this.getUser( action.id ).pipe(
                    map( user => userActions.cargarUsuarioSuccess({usuario: user}) ),
                    catchError(error => of(userActions.cargarUsuarioError({payload: error})))
                )
            ),
            

        )
    );

    getUser(id: string): Observable<any> {
        return this.usersService.getUserById(id);
    }



}