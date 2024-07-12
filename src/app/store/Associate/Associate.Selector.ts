import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AssociateModel } from "../Model/Associate.Model";

 const getassociatestate = createFeatureSelector<AssociateModel>('associate');

 export const getassociatelist = createSelector(getassociatestate,(state) => {
    return state.list
 })

 export const getassociateone = createSelector(getassociatestate,(state) => {
   return state.associateobj
 }) 