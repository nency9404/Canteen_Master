import { CREATE_CANTEEN_FAILURE, CREATE_CANTEEN_REQUEST, CREATE_CANTEEN_SUCCESS, CREATE_CATEGORY_FAILURE, CREATE_CATEGORY_REQUEST, CREATE_CATEGORY_SUCCESS, DELETE_CANTEEN_FAILURE, DELETE_CANTEEN_REQUEST, DELETE_CANTEEN_SUCCESS, GET_ALL_CANTEEN_FAILURE, GET_ALL_CANTEEN_REQUEST, GET_ALL_CANTEEN_SUCCESS, GET_CANTEEN_BY_USER_ID_FAILURE, GET_CANTEEN_BY_USER_ID_REQUEST, GET_CANTEEN_BY_USER_ID_SUCCESS, GET_CANTEEN_CATEGORY_FAILURE, GET_CANTEEN_CATEGORY_REQUEST, GET_CANTEEN_CATEGORY_SUCCESS, UPDATE_CANTEEN_FAILURE, UPDATE_CANTEEN_REQUEST, UPDATE_CANTEEN_STATUS_SUCCESS, UPDATE_CANTEEN_SUCCESS } from "./ActionType";

const initialState = {
    canteens: [],
    usersCanteen: null,
    canteen: null,
    loading: false,
    error: null,
    categories: [],
}

const canteenReducer = (state = initialState,action)=>{
    switch (action.type) {
        case CREATE_CANTEEN_REQUEST:
        case GET_ALL_CANTEEN_REQUEST:
        case DELETE_CANTEEN_REQUEST:
        case UPDATE_CANTEEN_REQUEST:
        case GET_CANTEEN_BY_USER_ID_REQUEST:
        case CREATE_CATEGORY_REQUEST:
        case GET_CANTEEN_CATEGORY_REQUEST:
            return{
                ...state,
                loading: true,
                error: null,
            };
            
        case CREATE_CANTEEN_SUCCESS:
            return{
                ...state,
                loading:false,
                usersCanteen:action.payload
            };

        case GET_ALL_CANTEEN_SUCCESS:
            return{
                ...state,
                loading: false,
                canteens: action.payload
            };
        
        case GET_CANTEEN_BY_USER_ID_SUCCESS:
        case UPDATE_CANTEEN_STATUS_SUCCESS:
        case UPDATE_CANTEEN_SUCCESS:
            return{
                ...state,
                loading: false,
                usersCanteen: action.payload,
            };

        case DELETE_CANTEEN_SUCCESS:
            return{
                ...state,
                error: null,
                loading: false,
                canteens: state.canteens.filter(
                    (item)=>item.id !== action.payload
                ),
                usersCanteen: state.usersCanteen.filter(
                    (item) => item.id !== action.payload
                ),
            };

        case CREATE_CATEGORY_SUCCESS:
            return{
                ...state,
                loading: false,
                categories: [...state.categories,action.payload],
            };
        
        case GET_CANTEEN_CATEGORY_SUCCESS:
            return{
                ...state,
                loading: false,
                categories: action.payload,
            };
        
        case CREATE_CANTEEN_FAILURE:
        case GET_ALL_CANTEEN_FAILURE:
        case DELETE_CANTEEN_FAILURE:
        case UPDATE_CANTEEN_FAILURE:
        case CREATE_CATEGORY_FAILURE:
        case GET_CANTEEN_CATEGORY_FAILURE:
        case GET_CANTEEN_BY_USER_ID_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

    
        default:
            return state;
    }
};

export default canteenReducer;