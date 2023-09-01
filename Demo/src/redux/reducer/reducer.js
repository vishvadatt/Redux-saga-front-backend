import * as type from '../action/actionTypes';


let userState = {
    user : [],
    loading:false,
    error : null,
    users : [],
    findOneUser : {}
}

export const SignUpReducer = (state = userState,action) => {
    switch(action.type){
        case type.SIGNUP:
           
        case type.SIGNUP_SUCCESS:
            return{
                ...state,
                loading : false,
                user : action.payload
            }
        case type.SIGNUP_ERROR:
            return{
                ...state,
                loading : false,
				error: action.payload,
            }

        case type.VIEWUSER:
        case type.VIEWUSER_SUCCESS:
            return{
                ...state,
                loading : false,
                users : action.payload
            }
        case type.VIEWUSER_ERROR:
            return{
                ...state,
                loading : false,
                error : action.payload
            }

        case type.DELETEUSER:
        case type.DELETEUSER_SUCCESS:
            return{
                ...state,
                loading : false,
                users : action.payload
            }
        case type.DELETEUSER_ERROR:
            return{
                ...state,
                loading : false,
                error : action.payload
            }

        case type.FINEONE_USER:
        case type.FINEONE_USER_SUCCESS:
            return{
                ...state,
                loading : false,
                findOneUser : action.payload
            }
        case type.FINEONE_USER_ERROR:
            return{
                ...state,
                loading : false,
                error : action.payload
            }

        case type.UPDATE_USER:
        
        case type.UPDATE_USER_SUCCESS:
            return{
                ...state,
                loading : false,
                user : action.payload
            }
        case type.UPDATE_USER_ERROR:
            return{
                ...state,
                loading : false,
                error: action.payload,
            }
        default:
            return state;
    }
}

const signInState = {
    token : {},
    loading : false,
    error : null
}
export const signInReducer = (state = signInState,action) => {
    switch(action.type){
        case type.SIGNIN:
        case type.SIGNIN_SUCCESS:
            return{
                ...state,
                loading : false,
                token : action.payload
            }
        case type.SIGNIN_ERROR:
            return {
                ...state,
                loading : false,
                error : action.payload
            }
        default :
            return state;
    }
}