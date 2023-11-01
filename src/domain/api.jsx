import axios from 'axios';

export const callAPI = async ({ endpoint, method, headers, params, data }) => {
    const baseURL = "https://restcountries.com/v3.1/all";
    const option = {
        baseURL,
        url: endpoint,
        method,
        headers,
        params,
        data
    }

    const response = await axios(option)
    return response.data
};