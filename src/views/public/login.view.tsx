import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useSearchParams } from "react-router-dom";
import { Container, Message } from "semantic-ui-react";
import { Login, LoginFormValues } from "../../components/login";
import { NavigateButton } from "../../components/navigateButton";
import { useGlobalContext } from "../../contexts/global.context";

export function LoginView() {
    const { state, onLogin } = useGlobalContext();
    const [searchParams, setSearchParams] = useSearchParams()
    const navigate = useNavigate();
    const [loading, setLoading] = useState<boolean>(false)
    useEffect(() => {
        if (state.loggedIn) {
            const redirect = searchParams.get('redirect')
            if(redirect){
                navigate(redirect)
            }
            else{
                navigate("/login-success")
            }
        }
    }, [state.loggedIn])
    const handleSignIn = async (formValues: LoginFormValues) => {
        const { username, password } = formValues;
        if (!username || !password) {
            return
        }
        console.log(formValues)
        console.log("login")
        onLogin?.(username, password)
    }
    return (
        <Container style={{ width: 400, margin: 48 }}>
            <div className="login-signup">
                <h1>Log In</h1>
            {loading ? <span>Loading...</span> : null}
            <Login onSuccess={handleSignIn} />
            {state.error && <Message warning>{state.error}</Message>}
            <h3>Don't have an account</h3>
            <NavigateButton url="sign-up">Create Account</NavigateButton>
            </div>
        </Container>
    );
}