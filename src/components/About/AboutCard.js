import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          I am an enthusiastic <span className="purple">MERN</span> stack developer, having a strong background in both <span className="purple">frontend</span> and <span className="purple">backend</span> technologies. My interest in the domain of <span className="purple">Web Development</span> was simply initiated through a <span className="purple">self-driven</span> internship that trained me well on how to make dynamic and user-friendly applications using <span className="purple">JavaScript</span>, <span className="purple">Node.js</span>, <span className="purple">React.js</span>, and <span className="purple">MongoDB</span>.
          <br />
          <br />
      Prior to entering tech, I pursued a degree in <span className="purple">civil engineering</span>, where I gained an understanding of the importance of <span className="purple">structural precision</span>, <span className="purple">project management</span>, and <span className="purple">problem-solving</span>. These are skills that serve me very well in <span className="purple">web development</span> and enable me to approach problem-solving and building solutions with an eye on quality.
      <br />
      <br />

      I am highly interested in building modern web technologies and products that really stretch the possibilities. My background in <span className="purple">engineering</span> enables me to look at problems from various dimensions and gives me a different edge in <span className="purple">web development</span>, thus providing an advantage when coming up with innovative solutions.
      <br />
      <br />

      I am a <span className="purple">developer</span> who aspires to learn and grow with experience, dedicated to giving back to the technology community to create truly extraordinary experiences in the digital world. Whether it's developing cutting-edge <span className="purple">web applications</span> or collaborating with similar-minded professionals, I'm excited to take new challenges and make a difference in the field of <span className="purple">web development</span>.
      <br />
      <br />Apart from <span className="purple">coding</span>, some other activities that I love to do!
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
