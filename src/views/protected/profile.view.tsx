import profile from "../../images/profile.jpg"

export function Profile() {
    return (
        <div className="profile">
            <h3>Bio</h3>
            <div className="body">
                <img src={profile} alt="" />
                <div>
                    <p>I am currently getting a head start on my professional career by completing a college level course in web programming at Mountainland Technical College to complete my senior year of high school. I currently have little experience in the field, but I plan to learn as much as I can in the near future.</p>
                </div>
            </div>
        </div>
    )
}