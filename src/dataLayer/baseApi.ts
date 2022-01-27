export class BaseAPI {
    static baseURL = "http://localhost:8080"
    static get<T>(path: string) {
        return fetch(`${BaseAPI.baseURL}${path}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        }).then((r: any) => r.json())
    };
    static post<T>(path: string, body?: T) {
        return fetch(`${BaseAPI.baseURL}${path}`, {
            method: "POST",
            body: body?JSON.stringify(body): "",
            headers: {
                "Content-Type": "application/json"
            }
        }).then((r: any) => r.json());
    }
}