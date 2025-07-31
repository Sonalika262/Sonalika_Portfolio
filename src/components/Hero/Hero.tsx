import { NavHashLink } from 'react-router-hash-link'
import ScrollAnimation from 'react-animate-on-scroll'
import Illustration from '../../assets/illustration.svg'
import linkedin from '../../assets/linkedin.svg'
import githubIcon from '../../assets/github.svg'
import Hello from '../../assets/Hello.gif'
import telegram from '../../assets/telegram.svg'
import { Container } from './styles'

export function Hero() {
  return (
    <Container id="home">
      <div className="hero-text">
        <ScrollAnimation animateIn="fadeInUp">
          <p>
            Hello <img src={Hello} alt="Hello" width="20px" />, I'm
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={200}>
          <h1>Sonalika Rathore</h1>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={400}>
          <h3>Full Stack Developer</h3>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={600}>
          <p className="small-resume">Experienced</p>
        </ScrollAnimation>

        {/* now that BrowserRouter is up at the root, this will work */}
        <ScrollAnimation animateIn="fadeInUp" delay={800}>
          <NavHashLink smooth to="#contact" className="button">
            Contact
          </NavHashLink>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInUp" delay={1000}>
          <div className="social-media">
            <a href="https://www.linkedin.com/in/sonalika26/" target="_blank" rel="noreferrer">
              <img src={linkedin} alt="Linkedin" />
            </a>
            <a href="https://github.com/Sonalika262/" target="_blank" rel="noreferrer">
              <img src={githubIcon} alt="GitHub" />
            </a>
            <a href="https://telegram.org/dl" target="_blank" rel="noreferrer">
              <img src={telegram} alt="telegram" />
            </a>
          </div>
        </ScrollAnimation>
      </div>

      <div className="hero-image">
        <ScrollAnimation animateIn="fadeInRight" delay={1000}>
          <img src={Illustration} alt="Illustration" />
        </ScrollAnimation>
      </div>
    </Container>
  )
}
