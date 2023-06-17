import axios, { CreateAxiosDefaults } from 'axios';
import https from 'https';
import qs from 'qs';

interface FetchProps {
    jwtToken?: string;
}

interface ResponseSuccess<T> {
    success?: boolean;
    data: T;
    message?: string;
}

interface ResponseError {
    status: number,
    title: string,
    errors: {
        [key: string]: string[]
    }
}

export interface ResponseData<T> extends ResponseSuccess<T>, ResponseError {

}

export interface PageData<T> {
    data: T[],
    totalRow: number
}

const ERROR_BAD_REQUEST = 400;
const ERROR_UNAUTHORIZED = 401;
const ERROR_INTERNAL_SERVICE = 500;

export const error_code = {
    ERROR_BAD_REQUEST,
    ERROR_UNAUTHORIZED,
    ERROR_INTERNAL_SERVICE,

}

const agent = new https.Agent({
    rejectUnauthorized: false
})

const instance = (props?: FetchProps) => {
    const options: CreateAxiosDefaults = {
        baseURL: "/api"
    };

    const axiosClient = axios.create(options);

    return axiosClient;
}

export default instance;
