import './About.css'
import meImage from './img/me.jpg'

function About() {
  return (
    <div className="About">
      <h1>
        <span className="about-name">Reyhan Quayum</span>
      </h1>
      <img src={meImage} alt="Reyhan Quayum" className="about-image" />
      <p>
        I am a third year Computer Science & Mathematics student at New York
        University interested in gaining experience in the blockchain space and
        exploring the intersection between business and software. I am
        passionate about developing open-source and accessible projects in the
        areas of financial technology and other social impact applications.
      </p>

      <p>
        I am most skilled in Java and am proficient in Python as well as C++ and
        C. I have worked extensively in Information Technology during my time as
        a student at NYU.
      </p>

      <p>Also, I love to watch the sun set on a grateful world. But before I go, here's a quote from an inspirational mentor of mine. </p>

      <blockquote>"Nah, I'd win" - Spongebob</blockquote>
    </div>
  )
}

export default About
