import { Container } from "./styles";
import githubIcon from "../../assets/github.svg"
// import DownloadApp from '../../assets/download.webp'
import externalLink from "../../assets/external-link.svg"
import ScrollAnimation from "react-animate-on-scroll";


export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
               <div className="project-links">
                <a href="https://github.com/Sonalika262" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /> </a>
                <a href="https://dicemaster1.netlify.app/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" /></a>
              </div>
            </header>
            <div className="body">
              <h3>Dice Master</h3>
              <p>
                DiceMaster is a browser-based two-player dice game built with JavaScript. 
                It simulates dice rolls and displays the winner with a dynamic and interactive UI.<br/><br/>
                
                • Dynamic dice roll simulation using JavaScript Math.random.()<br/>

                • Winner calculation and real-time DOM updates.<br/>

                • Responsive and visually appealing UI using CSS.<br/>

                • Lightweight and fast — runs directly in the browser.<br/>


              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>HTML</li>
                <li>CSS</li>
                <li>JAVASCRIPT</li>
        
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> <title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
              </div>
            </header>
            <div className="body">
              <h3>Online Job Portal</h3>
              <p>• Built an online job portal for students to apply for jobs.<br />
                • Built Responsive UI using React js. | Material UI | Tailwind CSS. <br />
                • Implemented Custom APIs for job applications.<br />
                • Used Javascript Services for Backend Operations. <br />
                • Performed CRUD operations and Manipulated data using MongoDB.</p>
            </div>
            <footer> <ul className="tech-list"> <li>React</li> <li>Express</li> <li>Node</li> <li>Axios</li> <li>MongoDB</li> </ul> </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                {/* <a href="https://github.com/Sonalika262" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /> </a>
                <a href="" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" /></a> */}
              </div>
            </header>
            <div className="body">
              <h3>Cryptocurrency Exchange</h3>
              <p>
                • Designed a responsive UI using Material UI and Tailwind CSS. <br />
                • Developed a cryptocurrency exchange Analytics application. <br />
                • Implemented real-time price tracking using CoinGecko API. <br />
                • Implemented real-time data fetching using WebSockets. <br />
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Next js.</li>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>CoinGecko API</li>
                <li>Socket.io</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>
      </div>
    </Container>
  );
}