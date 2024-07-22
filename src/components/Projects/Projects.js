import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import boot from "../../Assets/Projects/bootstarp.png";
import node from "../../Assets/Projects/node.png";
import float from "../../Assets/Projects/float.png";
import flex from "../../Assets/Projects/flex.png";
import blog from "../../Assets/Projects/blog.png";
import Contactlist from "../../Assets/Projects/contactlist.png"
import figdissc from "../../Assets/Projects/figdissc.png"

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
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={figdissc}
              isBlog={true}
              title="MediaMate project design in figma"
              description="The Figma design for MediaMate focuses on a clean and user-friendly interface with a modern aesthetic. The design adheres to principles of simplicity, consistency, and accessibility to ensure a seamless user experience across various devices."
              demoLink="https://www.figma.com/proto/PA3Ca41eXI77MupX9HCEiA/Social-media-design?t=bg6fLkwRuwWDtKqO-1"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Contactlist}
              isBlog={false}
              title="Contactlist using React Redux"
              description="Designed a responsive and user-friendly  contact management application using React and Redux,
               providing users with the ability to add, edit, and manage their contacts efficiently. ContactList streamlines the process of contact management,
                making it an essential tool for organizing and staying connected."
              ghLink="https://github.com/thasleemkhan762/react-redux-contactlist.git"
              demoLink="https://react-redux-contactlist.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blog}
              isBlog={false}
              title="Blogging page using React"
              description="Designed a dynamic and responsive blog website utilising React
               technology to afford a seamless reading experience with complete admin functionalities
                and a promise on doing so. It includes secure access to the admin, ability to work with
                 the blog, and convenient, efficient pagination for a great user experience."
              ghLink="https://github.com/thasleemkhan762/react-front-end-Blog.git"
              demoLink="https://react-front-end-blog.vercel.app/"
            />
          </Col>

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
