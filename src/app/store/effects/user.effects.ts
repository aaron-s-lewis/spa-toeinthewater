import { Injectable } from "@angular/core";
import { Effect, Actions, ofType } from "@ngrx/effects";
import { mergeMap, catchError } from "rxjs/operators";
import { Observable, from } from "rxjs";

import * as ModuleActions from "../actions/user.actions";
import { UserProfileService } from "../services.ts/user.services";

@Injectable()
export class UserEffects {
    @Effect()
    public SubmitSignupApplication$: Observable<object> = this.actions$.pipe(
        ofType(ModuleActions.SUBMIT_APPLICATION_FORM),
        mergeMap((action: any) =>
            this.service.submitApplication$(action.payload).pipe(
                mergeMap((response: any) => {
                    if (!response) {
                        throw Error("Application submit failed");
                    }
                    return from([response]);
                }),
                catchError(() =>
                    from([])
                )
            )

        )
    );
    constructor(private actions$: Actions, private service: UserProfileService) { }
}
