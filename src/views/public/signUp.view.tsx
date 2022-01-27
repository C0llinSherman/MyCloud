import { useState } from "react";
import { useNavigate } from "react-router";
import { Container, Message } from "semantic-ui-react";
import { NavigateButton } from "../../components/navigateButton";
import { SignUpForm, SignUpFormValues } from "../../components/signUpForm";
import API from "../../dataLayer/api";

export function SignUpView() {
    const [loading, setLoading] = useState<boolean>(false)
    const [success, setSuccess] = useState<boolean>(false)
    const navigate = useNavigate()
    const handleSignUp = async (values: SignUpFormValues) => {
        setLoading(true)
        const { data, status } = await API.signUp(values)
        setLoading(false)
        if (status !== "success") {
            //tell the user
            setSuccess(false)
        }
        else {
            setSuccess(true)
            setTimeout(navigate, 5000, "/login")
        }
    }
    return (
        <Container style={{ width: 400, margin: 48 }}>
            <div className="login-signup">
                <h1>Sign Up</h1>
                {loading ? "Signing up ..." : null}
                {
                    success && <Message success>Thank you for Signing up</Message>
                }
                <SignUpForm onSuccess={handleSignUp} />
                <h3>Already Have An Account</h3>
                <NavigateButton url="login">Log In</NavigateButton>
            </div>
        </Container>
    )
}