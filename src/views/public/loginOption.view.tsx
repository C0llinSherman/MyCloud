import { useNavigate } from "react-router";
import { Container } from "semantic-ui-react";
import { NavigateButton } from "../../components/navigateButton";
import { useGlobalContext } from "../../contexts/global.context";

function LoggedInValidation() {
    const { state: { loggedIn } } = useGlobalContext();
    const navigate = useNavigate()
    if (loggedIn) {
        console.log('logged in')
        navigate('/profile')
    }
}

export function GetStarted() {
    LoggedInValidation()
    return (
        <Container>
            <div className="loginOptions">
                <h4>Select an option below to get started</h4>
                <div className="options">
                    <NavigateButton url='sign-up'>Create Account</NavigateButton>
                    <NavigateButton url='login'>Log In</NavigateButton>
                </div>
            </div>
        </Container>
    )
}