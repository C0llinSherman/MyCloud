import { ProjectLink } from "../../components/projectLinks";
import todo from "../../images/todoimg.png"
import golf from "../../images/golf.jpeg"
import movie from "../../images/movie.jpg"
import ryParis from "../../images/ryParis.png"

export function ProjectLinks() {
    return (
        <div className="projectLinks">
            <h3>Project Links</h3>
            <div className="body">
                <ProjectLink img={todo} github="ToDo-App">To Do App</ProjectLink>
                <ProjectLink img={golf} github="Golf-Score-App">Golf Score Card App</ProjectLink>
                <ProjectLink img={movie} github="moviedemo">Movie App</ProjectLink>
                <ProjectLink img={ryParis} github="RYParis">RYParis</ProjectLink>
            </div>
        </div>
    )
}