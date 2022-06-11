import { endPoint } from './constants'
import axios from 'axios'

export const authAxios = axios.create({
    baseURLS: endPoint,
    headers: {
        Authorization: `Token ${localStorage.getItem("token")}`
    }
});