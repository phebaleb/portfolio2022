import { Link } from 'react-router-dom';

const Projects = () => {
    return (
        <div className="home-container palepink-background">
            <div className="home-headings-box">
                <h1>PROJECTS</h1>
            </div>

            <div className="project-card">
                <a href="https://phoebe.yoobeestudent.net/wendy-react/#/"><div className="project-image wendy"></div></a>

                <h2>WENDY HENDERSON ART</h2>
                <p>2022</p>
            </div>

            <div className="project-card">
                <a href="https://phoebes-portfolio2022.vercel.app/phoebejomusic.vercel.app"><div className="project-image music"></div></a>
                <h2>PHOEBE JO MUSIC</h2>
                <p>2022</p>
            </div>

            <div className="project-card">
                <a href="https://phoebes-portfolio2022.vercel.app/eworld-portfolio.vercel.app"><div className="project-image ehome"></div></a>
                <h2>EHOME BY EWORLD</h2>
                <p>2022</p>
            </div>

            <div className="project-card">
                <a href="https://phoebes-portfolio2022.vercel.app/montys.vercel.app"><div className="project-image montys"></div></a>
                <h2>MONTYS</h2>
                <p>2022</p>
            </div>
        </div>
    )
}

export default Projects