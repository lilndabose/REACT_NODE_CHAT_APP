import apiClient from '../http-common.js'

export default class HttpClient{
    constructor(endpoint){
        this.endpoint = endpoint;
    }

    async getData(){
        return await apiClient.get(`${this.endpoint}`);
    }
}