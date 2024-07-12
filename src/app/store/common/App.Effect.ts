import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { exhaustMap, map } from "rxjs";
import { emptyaction, showalert } from "./App.Action";

@Injectable()

export class AppEffect {
    constructor(private action$:Actions,private _snackbar:MatSnackBar){}
       
    _showalert = createEffect(() =>
        this.action$.pipe(
            ofType(showalert),
            exhaustMap(action => {
                return this.showsnackbaralert(action.message,action.resulttype).afterDismissed().pipe(
                    map(() => {
                        return emptyaction();
                    })
                )
            })
        )
    )

    showsnackbaralert(message:string,resulttype='fail'){
        let _class = resulttype == 'pass'?'green-snackbar':'red-snackbar';
        return this._snackbar.open(message,'ok',{
            verticalPosition:'top',
            horizontalPosition:'end',
            duration:5000,
            panelClass:[_class]
        })

    }
}