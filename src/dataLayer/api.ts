import { SignUpFormValues } from "../components/signUpForm"
import { BaseAPI } from "./baseApi"

type APIResponse<T> = {
    data?: T,
    status: string
    message?: string;
}

export type User = {
    firstName: string;
    lastName: string;
    email: string;
    username: string;
}

export default class API {
    static async signUp(formValues: SignUpFormValues): Promise<APIResponse<any>> {
        const response = await BaseAPI.post('/sign-up', formValues)
        const { password, confirmPassword, ...user } = formValues
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({
                    data: user,
                    status: "success"
                })
            }, 1500)
        })
    }
    static login(username: string, password: string): Promise<APIResponse<User>> {
        return BaseAPI.post('/login', { username, password })
    }
    static feedback( title: string, body: string, timestamp: number, username?: string): Promise<APIResponse<any>> {
        return BaseAPI.post('/feedback', { title, body, timestamp, username })
    }
    static getFeedback(): Promise<APIResponse<any>> {
        return BaseAPI.get('/get-feedback')
    }
}