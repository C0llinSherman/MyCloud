import { Button, Container, Form } from "semantic-ui-react";
import { useForm } from 'react-hook-form'

export type LoginFormValues = {
    username?: string;
    password?: string;
}

type LoginProps = {
    onSuccess: (formValues: LoginFormValues) => void;
    onError?: (errors: any) => void;
}

export function Login({onSuccess, onError}: LoginProps) {
   const { handleSubmit, register } = useForm<LoginFormValues>({
       mode: "onSubmit",
    defaultValues: {}
   })
    return (
        <Container style={{ width: 400, margin: 48 }}>
            <Form onSubmit={handleSubmit(onSuccess)}>
                <Form.Field>
                    <label>Username/Email</label>
                    <input {...register("username")} name="username" placeholder="username/email" />
                </Form.Field>
                <Form.Field>
                    <label>Password</label>
                    <input {...register("password")} name="password" type="password" placeholder="password" />
                </Form.Field>
                <Button type="submit">Sign In</Button>
            </Form>
        </Container>
    );
}