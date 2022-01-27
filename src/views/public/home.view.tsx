import { Container } from "semantic-ui-react";
import { NavigateButton } from "../../components/navigateButton";
import { useGlobalContext } from "../../contexts/global.context";

export function Home() {
    const { state: { loggedIn } } = useGlobalContext();
    return (
        <Container >
            <div className="homeDiv">
                <h1>Welcome to MyCloud</h1>
                <h4>An indepth profile of Collin Sherman</h4>
                <div>
                {loggedIn ? <NavigateButton url="profile">Get Started</NavigateButton>: <NavigateButton url="get-started">Get Started</NavigateButton>}
                </div>
            </div>
        </Container>
    )
}