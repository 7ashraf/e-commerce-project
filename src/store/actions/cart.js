import axios from "axios";
import { authAxios } from '../../utils'
import {
    CART_FAIL,
    CART_SUCCESS,
    CART_START,
} from "./actionTypes";
import { orderSummary } from "../../constants";

export const cartStart = () => {
    return {
        type: CART_START
    };
};

export const cartSuccess = data => {
    console.log(data)
    return {
        type: CART_SUCCESS,
        data
    };
};

export const cartFail = error => {
    return {
        type: CART_FAIL,
        error: error
    };
};

export const fetchCart = () => {
    return dispatch => {
        dispatch(cartStart());
        authAxios
            .get(orderSummary)
            .then(res => {
                dispatch(cartSuccess(res.data));
            })
            .catch(err => {
                dispatch(cartFail(err));
            });
    };
};
