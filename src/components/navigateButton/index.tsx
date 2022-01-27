import { useNavigate } from "react-router"
import { Button } from "semantic-ui-react"

type NavigateButtonProps = {
    url: string;
    children?: string;
}

export function NavigateButton({url, children}: NavigateButtonProps) {
    const navigate = useNavigate()
        const navigateButton = (button: string) => () => {
            navigate(`/${button}`)
        }
    return (
        <Button onClick={navigateButton(url)}>{children}</Button>
    )
}