import { Button, Container, Form } from "semantic-ui-react";
import { useForm } from 'react-hook-form'

export type SignUpFormValues = {
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    password: string;
    confirmPassword: string
}

type SignUpProps = {
    onSuccess: (formValues: SignUpFormValues) => void;
    onError?: (errors: any) => void;
}

export function SignUpForm({ onSuccess, onError }: SignUpProps) {
    const { handleSubmit, register } = useForm<SignUpFormValues>({
        defaultValues: {}
    })
    return (
        <Container style={{ width: 400, margin: 48 }}>
            <Form onSubmit={handleSubmit(onSuccess)}>
                <Form.Field>
                    <label>Username</label>
                    <input {...register("username")} name="username" placeholder="username" />
                </Form.Field>
                <Form.Field>
                    <label>Email</label>
                    <input {...register("email")} name="email" placeholder="email" />
                </Form.Field>
                <Form.Field>
                    <label>First Name</label>
                    <input {...register("firstName")} name="firstName" placeholder="first name" />
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input {...register("lastName")} name="lastName" placeholder="last name" />
                </Form.Field>
                <Form.Field>
                    <label>Password</label>
                    <input {...register("password")} name="password" type="password" placeholder="password" />
                </Form.Field>
                <Form.Field>
                    <label>Confirm Password</label>
                    <input {...register("confirmPassword")} name="confirmPassword" type="password" placeholder="confirm password" />
                </Form.Field>
                <Button type="submit">Create Account</Button>
            </Form>
        </Container>
    )
}