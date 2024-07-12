import { AssociateModel } from "../Model/Associate.Model";

export const AssociateState:AssociateModel = {
    list:[],
    errormessage:'',
    associateobj : {
        id:0,
        name:'',
        email:'',
        phone:'',
        address:'',
        type:'CUSTOMER',
        associategroup:'level1',
        status:true
    }
}