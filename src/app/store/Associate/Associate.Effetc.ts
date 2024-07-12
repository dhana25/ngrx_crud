import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AssociateService } from "src/app/service/associate.service";
import {  addassociate, addassociatesuccess, deleteassociate, deleteassociatesuccess, getassociate, getassociatesuccess, loadassociate, loadassociatefail, loadassociatesuccess, updateassociate, updateassociatesuccess } from "./Associate.Action";
import { catchError, exhaustMap, map, of, switchMap } from "rxjs";
import { showalert } from "../common/App.Action";

@Injectable()

export class AssociateEffect {
    constructor(private action$:Actions,private servic:AssociateService) {}

    _loadAssociate = createEffect(() =>
        this.action$.pipe(
            ofType(loadassociate),
            exhaustMap((action) => {
                return this.servic.GetAll().pipe(
                    map((data) => {
                        return loadassociatesuccess({list:data})
                    }),
                    catchError((_error) => of(loadassociatefail({errormessage:_error.message})))
                )
            })
        ) 
    )

    _AddAssociate = createEffect(() =>
        this.action$.pipe(
            ofType(addassociate),
            exhaustMap((action) => {
                return this.servic.create(action.inputdata).pipe(
                    exhaustMap((data) => {
                        return of(addassociatesuccess({inputdata:action.inputdata}),
                    showalert({message:'created successfully', resulttype:'pass'}))
                    }),
                    catchError((_error) => of(showalert({message:'Failed to create associate',resulttype:'fail'})))
                )
            })
        ) 
    )

    _GetAssociate = createEffect(() => 
        this.action$.pipe(
            ofType(getassociate),
            exhaustMap(action => {
                return this.servic.GetBycode(action.id).pipe(
                    map((data) => {
                        return getassociatesuccess({obj:data})
                    }),
                    catchError((_error) => of(showalert({message:'Failed to load data'+_error.message,resulttype:'fail'})))
                )
            })
        )
    )

    _UpdateAssociate = createEffect(() => 
          this.action$.pipe(
            ofType(updateassociate),
           exhaustMap(action => {
              return this.servic.update(action.inputdata).pipe(
                map((data) => {
                    return updateassociatesuccess({inputdata:action.inputdata}),
                    showalert({message:'Update successfully',resulttype:'pass'})
                }),
                catchError((_error) => of(showalert({message:'Failed to update',resulttype:'fail'})))
              )
           }),
        )  
    )

    _DeleteAssociate = createEffect(() =>
        this.action$.pipe(
            ofType(deleteassociate),
            exhaustMap(action => {
                return this.servic.delete(action.id).pipe(
                    map(data => {
                        return deleteassociatesuccess({id:action.id}),
                        showalert({message:'Delete success',resulttype:'pass'})
                    }),
                    catchError(_error => of(showalert({message:'Delete failed',resulttype:'fail'})))
                )
            })
        )
    
    )
}