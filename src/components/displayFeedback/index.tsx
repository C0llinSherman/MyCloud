import { useQuery } from "react-query"
import API from "../../dataLayer/api"

export function DisplayFeedback() {
    const { data: adminuserFeedback } = useQuery(["feedback"], async () => {
        const { data, status } = await API.getFeedback()
        return data || []
    })
    return (
        <div>
            {adminuserFeedback?.map((feedback: any) => (
                <div key={feedback.timestamp} className='feedback'>
                    <h4>{feedback.title}</h4>
                    <p>{feedback.body}</p>
                    <div className="user-time">
                        <h6>{feedback.username}</h6>
                        <h6>{new Date(feedback.timestamp).toString()}</h6>
                    </div>
                </div>
            ))}
        </div>
    )
}