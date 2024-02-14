import './About.css'; // Import the corresponding CSS for styling
import meImage from './img/me.jpg'; // Import the image


function About() {
  return (
    <div className="About">
      <h1><span className="about-name">Reyhan Quayum</span></h1>
      <p>I am a third year Computer Science & Mathematics student at New York University interested in gaining experience in the blockchain space and exploring the intersection between business and software, and I am also passionate about developing open-source and accessible projects in the areas of assistive technology and other social impact applications. I am most skilled in Java and am proficient in Python as well as C++ and C. I have worked extensively in Information Technology during my time as a student at NYU. 
        <br></br><strong>Nah, I'd win - Spongebob</strong></p>
      <br></br>
      <img src={meImage} alt="Me" className="about-image"/>
    </div>
  );
}

export default About;
