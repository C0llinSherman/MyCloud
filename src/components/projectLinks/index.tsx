type ProjectLinkProps = {
    img: string;
    github: string;
    children?: string;
}

export function ProjectLink({ img, github, children }: ProjectLinkProps) {
    const githubhref = 'https://github.com/C0llinSherman/'
    const hostedhref = "https://c0llinsherman.github.io/"
    return (
        <div className="projectLink">
            <img src={img} alt="" />
            <h4>{children}</h4>
            <div className="anchors">
                <a href={githubhref + github} target="_blank">GitHub Link</a>
                <a href={hostedhref + github} target="_blank">View Deployement</a>
            </div>
        </div>
    )
}