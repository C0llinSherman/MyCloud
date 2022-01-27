import { useState } from "react";
import { Message } from "semantic-ui-react";
import { DisplayFeedback } from "../../components/displayFeedback"
import { FeedbackForm, FeedbackFormValues } from "../../components/feedback"
import { useGlobalContext } from "../../contexts/global.context";
import API from "../../dataLayer/api";

export function FeedbackView() {
    const [submit, setSubmit] = useState<boolean>(false)
    const { state: { user } } = useGlobalContext()
    const handleFeedback = async (formValues: FeedbackFormValues) => {
        const { title, body } = formValues;
        let timestamp = Date.now()
        await API.feedback(title, body, timestamp, user?.username)
        if (!title || !body) {
            return
        }
        setSubmit(true)
        setTimeout(() => {
            setSubmit(false)
        }, 5000);
    }
    return (
        <div className="feedback">
            <h3>Feedback</h3>
            {
                submit && <Message success>Feedback Submitted</Message>
            }
            {user?.username === 'shermcol000' ? <DisplayFeedback /> : <FeedbackForm onSuccess={handleFeedback} />}
        </div>
    )
}