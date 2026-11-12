class APIRequest {
    instance: string;

    constructor(instance: string) {
        this.instance = instance
    }

    getInstance() {
        return this;
    }

    async apiRequest(endpoint: string, options: RequestInit) {
        const response = await fetch(endpoint, options);

        return response
    }

    async readJson(response: Response) {
        return (await response.json());
    }
}

export default APIRequest