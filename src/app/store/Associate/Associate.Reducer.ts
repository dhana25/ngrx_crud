import { createReducer, on } from "@ngrx/store";
import { AssociateState } from "./Associate.State";
import { addassociatesuccess, deleteassociate, deleteassociatesuccess, getassociate, getassociatesuccess, loadassociatefail, loadassociatesuccess, updateassociate, updateassociatesuccess } from "./Associate.Action";
import { state } from "@angular/animations";
import { act } from "@ngrx/effects";

const _AssociateReducer = createReducer(AssociateState,
    on(loadassociatesuccess,(state,action) => {
        return {
            ...state,
            list:[...action.list],
            errormessage:''
        }
    }),
    on(loadassociatefail,(state,action) => {
        return {
            ...state,
            list:[],
            errormessage:action.errormessage
        }
    }),
    on(addassociatesuccess,(state,action) => {
        const _maxid = Math.max(...state.list.map(o => o.id));
        const _newdata ={...action.inputdata}
        _newdata.id = _maxid+1
        return {
            ...state,
            list:[...state.list,_newdata],
            errormessage:''
        }
    }),

    on(getassociatesuccess,(state,action) => {
        return {
            ...state,
            associateobj:action.obj,
            errormessage:''
        }
    }),
    on(updateassociate,(state,action) => {
        const _newdata = state.list.map(y => {
            return y.id === action.inputdata.id?action.inputdata:y
        })
        return {
            ...state,
            list:_newdata,
            errormessage:''
        }
    }),
    on(deleteassociate,(state,action) => {
        const _newid = state.list.filter(h => h.id!=action.id);
        return {
            ...state,
            list:_newid,
            errormessage:''
        }
    })
)

export function AssociateReducer(state:any,action:any) {
  return _AssociateReducer(state,action)
}