import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

const Home = () => {
    return (
        <>
            <div className="home-container blue-background">

                <div className="home-left">
                    <div className="home-image-section"></div>
                    {/* <div className="home-bottom-left-section"></div> */}
                </div>
                <div className="home-right">
                    {/* <div className="home-top-right-section"></div> */}
                    <div className="home-bottom-right-section">
                        <div className="home-headings-box">
                            <h1>PHOEBE THOMPSON</h1>
                            <h2>WEB DESIGN PORTFOLIO</h2>
                            <p className="home-p">I can design you a beautiful new website that’s easy to use and hard to forget.</p>
                        </div>
                    </div>
                </div>
            </div>
            <AboutMe />
            <Projects />
            <Contact />
        </>
    )
}

export default Home;