import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import busbooking from "../../Assets/Projects/busbooking.png";
import foodOrdring from "../../Assets/Projects/foodOrdring.png";
import netflixgpt from "../../Assets/Projects/netflixgpt.png";
import inventory from "../../Assets/Projects/inventory2.png";

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
              imgPath={netflixgpt}
              isBlog={false}
              title="Netflix GPT"
              description="Created a Netflix clone featuring a responsive design using React and Tailwind CSS, with OpenAI-powered movie recommendations boosting user engagement by 35% and a new anime section through the JIKAN API, increasing anime content interaction by 40%. Achieved a 20% reduction in page load times through performance optimizations"
              ghLink="https://github.com/kiranM8497/NetFlix-Gpt"
              demoLink="hhttps://net-flix-gpt-git-main-kiran-muttanwars-projects.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={inventory}
              isBlog={false}
              title="Inventory and Billing Software"
              description="Leading a team of three developers on an ongoing freelance project to build inventory management and billing software for a distribution company. Utilizing static site generation techniques to achieve a 25% improvement in load times and overall efficiency compared to the existing Excel-based system. "
              ghLink="https://github.com/kiranM8497"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={foodOrdring}
              isBlog={false}
              title="Swiggy Clone with Live API Integration"
              description="Developed an interactive Netflix clone with React, Firebase, Redux, and Tailwind CSS, featuring user authentication, search functionality, and a dynamic Netflix-like UI. Integrated TMDB API for a comprehensive movie library, and added a new anime section using the JIKAN API, leading to a 40% boost in user retention and a 30% increase in time spent on the platform."
              ghLink="https://github.com/kiranM8497/SwiggyClone"
              demoLink="https://bytenow.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={busbooking}
              isBlog={false}
              title="ONLINE BUS TICKET BOOKING & RESERVATION PLATFORM"
              description="Combined Java/J2EE, Spring, Spring Boot, React, and MySQL with Spring Data JPA to develop a robust platform. Achieved a 30% boost in application performance and a 25% reduction in system downtime. Led a team of five developers, improving team efficiency by 20% and meeting deadlines. Oversaw the development process, resulting in a 40% faster project delivery and a 15% reduction in development costs."
              ghLink="https://github.com/kiranM8497/BlueBus---"
              demoLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
