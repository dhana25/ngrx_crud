import { createAction, props } from "@ngrx/store";
import { Associate } from "../Model/Associate.Model";

export const LOAD_ASSOCIATE = '[associate page]load associate'
export const LOAD_ASSOCIATE_SUCCESS = '[associate page]load associate success'
export const LOAD_ASSOCIATE_FAIL = '[associate page]load associate fail'
export const ADD_ASSOCIATE = '[associate page]add associate'
export const ADD_ASSOCIATE_SUCCESS = '[associate page]add associate success'
export const GET_ASSOCIATE = '[associate page]get associate'
export const GET_ASSOCIATE_SUCCESS = '[associate page]get associate success'
export const UPDATE_ASSCOIATE = '[associate page]update associate'
export const UPDATE_ASSCOIATE_SUCCESS = '[associate page]update associate success'
export const DELETE_ASSOCIATE = '[associate page]delete associate'
export const DELETE_ASSOCIATE_SUCCESS = '[associate page]delete associate success'

export const loadassociate = createAction(LOAD_ASSOCIATE);
export const loadassociatesuccess  = createAction(LOAD_ASSOCIATE_SUCCESS,props<{list:Associate[]}>());
export const loadassociatefail = createAction(LOAD_ASSOCIATE_FAIL,props<{errormessage:string}>());

export const addassociate = createAction(ADD_ASSOCIATE,props<{inputdata:Associate}>());
export const addassociatesuccess = createAction(ADD_ASSOCIATE_SUCCESS,props<{inputdata:Associate}>())

export const getassociate = createAction(GET_ASSOCIATE,props<{id:number}>())
export const getassociatesuccess = createAction(GET_ASSOCIATE_SUCCESS,props<{obj:Associate}>())

export const updateassociate = createAction(UPDATE_ASSCOIATE,props<{inputdata:Associate}>())
export const updateassociatesuccess = createAction(UPDATE_ASSCOIATE_SUCCESS,props<{inputdata:Associate}>())

export const deleteassociate =createAction(DELETE_ASSOCIATE,props<{id:number}>())
export const deleteassociatesuccess = createAction(DELETE_ASSOCIATE_SUCCESS,props<{id:number}>())

