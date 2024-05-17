import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
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
          </p>
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
