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

    loadUsers$ = createEffect(
        () => this.actions$.pipe(
            ofType(usersActions.loadUsers),
            mergeMap(
                () => this.getUsers().pipe(
                    map( users => usersActions.loadUsersSuccess({users: users}) ),
                    catchError(error => of(usersActions.loadUsersError({payload: error})))
                )
            ),
        )
    );

    getUsers(): Observable<any> {
        return this.usersService.getUsers();
    }
}