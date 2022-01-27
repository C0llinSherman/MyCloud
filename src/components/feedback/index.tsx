import { Button, Container, Form } from "semantic-ui-react";
import { useForm } from 'react-hook-form'

export type FeedbackFormValues = {
    title: string;
    body: string;
}

type FeedbackProps = {
    onSuccess: (formValues: FeedbackFormValues) => void;
    onError?: (errors: any) => void;
}

export function FeedbackForm({ onSuccess, onError }: FeedbackProps) {
    const { handleSubmit, register } = useForm<FeedbackFormValues>({
        defaultValues: {}
    })
    return (<Container >
        <Form onSubmit={handleSubmit(onSuccess)}>
            <Form.Field style={{ width: 400 }}>
                <label>Title</label>
                <input {...register("title")} name="title" placeholder="title" />
            </Form.Field>
            <Form.Field>
                <label>Body</label>
                <textarea {...register("body")} name="body" placeholder="body" />
            </Form.Field>
            <Button type="submit">Submit Feedback</Button>
        </Form>
    </Container>)
}