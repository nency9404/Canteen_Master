import axios from "axios";
import { API_URL } from "../../Config/api";
import { CREATE_CANTEEN_FAILURE, CREATE_CANTEEN_REQUEST, CREATE_CANTEEN_SUCCESS, CREATE_CATEGORY_FAILURE, CREATE_CATEGORY_REQUEST, CREATE_CATEGORY_SUCCESS, DELETE_CANTEEN_FAILURE, DELETE_CANTEEN_REQUEST, DELETE_CANTEEN_SUCCESS, GET_ALL_CANTEEN_FAILURE, GET_ALL_CANTEEN_REQUEST, GET_ALL_CANTEEN_SUCCESS, GET_CANTEEN_BY_USER_ID_FAILURE, GET_CANTEEN_BY_USER_ID_REQUEST, GET_CANTEEN_BY_USER_ID_SUCCESS, GET_CANTEEN_CATEGORY_FAILURE, GET_CANTEEN_CATEGORY_REQUEST, GET_CANTEEN_CATEGORY_SUCCESS, UPDATE_CANTEEN_FAILURE, UPDATE_CANTEEN_REQUEST, UPDATE_CANTEEN_STATUS_FAILURE, UPDATE_CANTEEN_STATUS_REQUEST, UPDATE_CANTEEN_STATUS_SUCCESS, UPDATE_CANTEEN_SUCCESS } from "./ActionType";


export const getAllCanteensAction = () => {
    return async (dispatch) => {
        dispatch({type:GET_ALL_CANTEEN_REQUEST});
        try {
            const {data} = await axios.get(`${API_URL}/api/canteens`);

            dispatch({type:GET_ALL_CANTEEN_SUCCESS,payload:data});
            console.log("all canteen ",data);
            
        } catch (error) {
            console.log("catch error ",error);
            dispatch({type:GET_ALL_CANTEEN_FAILURE,payload:error});
        }
    }
};

export const getCanteenByUserId=(userEmail)=>{
    return async(dispatch)=>{
        dispatch({type:GET_CANTEEN_BY_USER_ID_REQUEST});

        try {
            const {data} = await axios.get(`${API_URL}/api/admin/canteens/user`,{
                params: {email:userEmail}
            });

            console.log("get canteen by user id ",data);
            dispatch({type:GET_CANTEEN_BY_USER_ID_SUCCESS,payload:data});
        } catch (error) {
            console.log("catch error ",error);
            dispatch({type:GET_CANTEEN_BY_USER_ID_FAILURE,payload:error})
        }
    }
};

export const createCanteen = (reqdata,userEmail)=>{
    return async(dispatch) => {
        dispatch({type:CREATE_CANTEEN_REQUEST});

        try {
            const {data} = await axios.post(`${API_URL}/api/admin/canteens/create`,reqdata.data,{
                params: {email:userEmail}
            });

            dispatch({type:CREATE_CANTEEN_SUCCESS});
            console.log("created canteen ",data);
        } catch (error) {
            console.log("catch error ",error);
            dispatch({type:CREATE_CANTEEN_FAILURE,payload:error});
            
        }
    }
};

export const updateCanteen = ({canteenId,canteenData})=>{
    return async (dispatch)=>{
        dispatch({type:UPDATE_CANTEEN_REQUEST});

        try {
            const res = await axios.put(`${API_URL}/api/admin/canteens/${canteenId}`,canteenData);

            dispatch({type:UPDATE_CANTEEN_SUCCESS,payload:res.data});
        } catch (error) {
            console.log("catch error ",error);
            dispatch({type:UPDATE_CANTEEN_FAILURE,payload:error});
        }
    }
};

export const deleteCanteen = ({canteenId})=>{
    return async(dispatch) => {
        dispatch({type:DELETE_CANTEEN_REQUEST});

        try {
            const res = await axios.delete(`${API_URL}/api/admin/canteens/${canteenId}`);
            console.log("delete canteen ",res.data);
            dispatch({type:DELETE_CANTEEN_SUCCESS,payload:canteenId})
        } catch (error) {
            console.log("catch error ",error);
            dispatch({type:DELETE_CANTEEN_FAILURE,payload:error});
        }
    }
};

export const updateCanteenStatus = ({canteenId})=>{
    return async(dispatch) => {
        dispatch({type:UPDATE_CANTEEN_STATUS_REQUEST});

        try {
            const res = await axios.put(`${API_URL}http://localhost:8080/api/admin/canteens/${canteenId}/status`);
            console.log("update canteen status ",res.data);
            dispatch({type:UPDATE_CANTEEN_STATUS_SUCCESS,payload:res.data})
        } catch (error) {
            console.log("catch error ",error);
            dispatch({type:UPDATE_CANTEEN_STATUS_FAILURE,payload:error});
        }
    }
};

export const createCategoryAction = ({reqdata,userEmail})=>{
    return async (dispatch) => {
        dispatch({type:CREATE_CATEGORY_REQUEST});

        try {
            const res = await axios.post(`${API_URL}/api/admin/category`,reqdata,{
                params: {email:userEmail},
            });
            console.log("create category ",res.data);
            dispatch({type:CREATE_CATEGORY_SUCCESS,payload:res.data});
        } catch (error) {
            console.log("catch error ",error);
            dispatch({type:CREATE_CATEGORY_FAILURE,payload:error});
        }
    }
};

export const getCanteenCategory = ({userEmail})=>{
    return async (dispatch) => {
        dispatch({type:GET_CANTEEN_CATEGORY_REQUEST});

        try {
            const res = await axios.post(`${API_URL}/api/category/canteen`,{
                params: {email:userEmail},
            });
            console.log("get canteen category ",res.data);
            dispatch({type:GET_CANTEEN_CATEGORY_SUCCESS,payload:res.data});
        } catch (error) {
            console.log("catch error ",error);
            dispatch({type:GET_CANTEEN_CATEGORY_FAILURE,payload:error});
        }
    }
};
