import { useGlobalContext } from "../../contexts/global.context";

export function Account() {
    const { state: { user } } = useGlobalContext()
    if (!user) {
        return (
            <div>
                <h3>Not logged in!</h3>
            </div>
        )
    }
    return (
        <div className="account">
            <h3>Account</h3>
            <div className="body">
                <div>
                    <div>Name: {user?.firstName} {user?.lastName}</div>
                    <div>Username: {user?.username}</div>
                    <div>Email: {user?.email}</div>
                </div>
            </div>
        </div>
    );
}