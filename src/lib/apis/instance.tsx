import axios, { CreateAxiosDefaults } from 'axios';
import https from 'https';
import FormData from 'form-data';
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
        baseURL: process.env.API_BASE_URL,
        headers: {
            Authorization: props?.jwtToken ? ('Bearer ' + props.jwtToken) : undefined,
            // 'content-type': 'multipart/form-data',
            Accept: 'application/json'
        },
        paramsSerializer: {
            serialize: params => {
                return qs.stringify(params, { arrayFormat: 'repeat', allowDots: true });
            }
        },
        httpsAgent: agent
    };

    const axiosClient = axios.create(options);

    axiosClient.interceptors.request.use(async (config) => {

        if (config.method !== "get") {
            // config.headers.setContentType('multipart/form-data')
            var newData = new FormData();
            if (config.data) {
                for (var key in config.data) {
                    //paser array format to repeat
                    if (Array.isArray(config.data[key])) {
                        // console.log(config.data[key]);
                        for await (const item of config.data[key]) {
                            newData.append(key, item);
                        }
                    }
                    else {
                        newData.append(key, config.data[key]);
                    }
                }
            }
            config.data = newData;
        }
        
        return config;
    }, (error) => {
        
        return Promise.reject(error);
    });

    axiosClient.interceptors.response.use(response => {
        return response;
    }, error => {        
        
        // console.error(error.response.data);
        if (error.response && error.response.data && error.response.data.error &&
            (error.response.data.session === false || error.response.data.session === "false")) {
            return error.response?.data
        }
        else if (error.response && error.response.data && error.response.data.error && error.response.data.error.message) {
            // toastMessage(error.response.data.error.message, 1);
            return error.response?.data
        }
        else if (error.response) {
            let result: ResponseError = {
                status: error.response.status,
                title: "LỖI",
                errors: null
            };
            switch (error.response.status) {
                case ERROR_BAD_REQUEST:
                    result.title = error.response?.data?.title;
                    result.errors = error.response?.data?.errors;
                    break;

                default:
                    return error.response?.data;
            }
            return result
        }
        return {};
    })

    return axiosClient;
}

export default instance;
