import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import boot from "../../Assets/Projects/bootstarp.png";
import node from "../../Assets/Projects/node.png";
import float from "../../Assets/Projects/float.png";
import flex from "../../Assets/Projects/flex.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Bits-0f-C0de"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col> */}

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={node}
              isBlog={false}
              title="Employee Management System Using Node"
              description="Developed an online, web-based Employee management system with
              Node.js, Express.js, and MongoDB. This application enables
              administrators to perform all CRUD operations on employee records,
              including adding new employees, consulting existing ones, updating
              employee information, and managing user roles and permissions"
              ghLink="https://github.com/thasleemkhan762/Employee-management-system-Node.js-.git"
              demoLink="https://javascript-el6q.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={boot}
              isBlog={false}
              title="Google Form Style Contact Form"
              description="A contact form inspired by Google Forms was created using the
              Bootstrap framework; the form is responsive and user-friendly so
              that it could be used to collect visitors' full names, email addresses,
              and so on"
              ghLink="https://github.com/thasleemkhan762/Bootstrap-Form.git"
              demoLink="https://thasleemkhan762.github.io/Bootstrap-Form/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={flex}
              isBlog={false}
              title="Responsive Landing page"
              description="Developed a visually appealing and functional page that is
              responsive to all devices and screen sizes for an optimal viewing
              experience by users."
              ghLink="https://github.com/thasleemkhan762/Landing-page-using-Flex.git"
              demoLink="https://thasleemkhan762.github.io/Landing-page-using-Flex/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here
            />
          </Col> */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={float}
              isBlog={false}
              title="Landing Page"
              description="Simple landing page created using html and css (float method)."
              ghLink="https://github.com/thasleemkhan762/Landing-page-using-Float.git"
              demoLink="https://thasleemkhan762.github.io/Landing-page-using-Float/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
