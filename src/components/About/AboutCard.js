import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          I am an enthusiastic <span className="purple">MERN</span> stack developer, having a strong background in both frontend and backend technologies. My interest in the domain of Web Development was simply initiated through a self-driven internship that trained me well on how to make dynamic and user-friendly applications using JavaScript, Node.js, React.js, and MongoDB.
          <br />
      Prior to entering tech, I pursued a degree in civil engineering, where I gained an understanding of the importance of structural precision, project management, and problem-solving. These are skills that serve me very well in web development and enable me to approach problem-solving and building solutions with an eye on quality.
      <br />

      I am highly interested in building modern web technologies and products that really stretch the possibilities. My background in engineering enables me to look at problems from various dimensions and gives me a different edge in web development, thus providing an advantage when coming up with innovative solutions.
      <br />

      I am a developer who aspires to learn and grow with experience, dedicated to giving back to the technology community to create truly extraordinary experiences in the digital world. Whether it's developing cutting-edge web applications or collaborating with similar-minded professionals, I'm excited to take new challenges and make a difference in the field of web development.
          </p>
          {/* <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Thasleem khan </span>
            from <span className="purple"> Kollam, Kerala.</span>
            <br />
            I'm currently interning as a
            <span className="purple"> full-stack web developer </span>
            at
            <span className="purple"> Stackup Learning Hub.</span>
            <br />
            I have completed B.E. civil Engineering from Anna University.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p> */}
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning New Things
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Improvise, adapt, overcome."{" "}
          </p>
          <footer className="blockquote-footer">Clint Eastwood</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
