import { Link } from 'react-router-dom';

const Projects = () => {
    return (
        <div className="home-container palepink-background">
            <div className="home-headings-box">
                <h1>PROJECTS</h1>
            </div>

            <div className="project-card">
                <a href="https://phoebe.yoobeestudent.net/wendy-react/#/"><img className="project-image wendy"></img></a>

                <h2>WENDY HENDERSON ART</h2>
                <p>2022</p>
            </div>

            <div className="project-card">
                <a href="https://phoebejomusic.vercel.app"><img className="project-image music"></img></a>
                <h2>PHOEBE JO MUSIC</h2>
                <p>2022</p>
            </div>

            <div className="project-card">
                <a href="https://eworld-portfolio.vercel.app"><img className="project-image ehome"></img></a>
                <h2>EHOME BY EWORLD</h2>
                <p>2022</p>
            </div>

            <div className="project-card">
                <a href="https://montys.vercel.app"><img className="project-image montys"></img></a>
                <h2>MONTYS</h2>
                <p>2022</p>
            </div>
        </div>
    )
}

export default Projects