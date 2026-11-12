import APIRequest from "./http/apiRequest.js";

class MisskeyClient {
    instance: string;
    apiRequest: APIRequest;

    constructor(instance: string) {
        this.instance = instance
        this.apiRequest = new APIRequest(this.instance);
    }

    getInstance() {
        return this;
    }

    getAPIRequest() {
        return this.apiRequest;
    }
}

export default MisskeyClient