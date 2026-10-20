import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import movies from "../../Assets/Projects/2024-09-28 (3).png";
import market from "../../Assets/Projects/2024-09-28 (11).png";
import Chat_App from "../../Assets/screenshot-2026-07-17_17-58-54.png";
import security from "../../Assets/screenshot-2026-07-29_16-11-46.png";
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
              imgPath={movies}
              isBlog={false}
              title="Movies & Series (frontend)"
              description=" Using (Html , Css , Redux , Redux ToolKit , Tailwind , Material Tailwind ,
              React Icons )
              • This project offers a comprehensive collection of movies and series,
              complete with all the details imaginable, ensuring users have access to
              rich information and an enjoyable viewing experience."
              ghLink="https://github.com/Amir-017/aflam"
              demoLink="https://aflam-eta.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={market}
              isBlog={false}
              title="Market (frontend)"
              description=" Using (Html , Css , react , Tailwind , Material Tailwind , React Icons)
              •This project encompasses all essential life requirements, providing users
              with everything they need for a convenient and fulfilling daily experience.
              "
              ghLink="https://github.com/Amir-017/market"
              demoLink="https://market-brown-three.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={market}
              isBlog={false}
              title="Market (Full Stack)"
              description="A modern Full Stack MERN e-commerce application that provides a seamless shopping experience with a responsive and user-friendly interface. The project includes secure JWT authentication, product management, shopping cart, order management, RESTful APIs, and MongoDB database integration. Built with Next.js, React, Tailwind CSS, Material Tailwind, Node.js, Express.js, MongoDB, and deployed using Vercel."
              ghLink="https://github.com/Amir-017/marketProject_ConnectedWith_BackEnd.git"
              demoLink="https://market-project-connected-with-back.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Chat_App}
              isBlog={false}
              title="Chat App (Full Stack)"
              description="I used React, Node.js, Express, and MongoDB to build this project.
              The entire website is responsive. This project is a real-time
              chat application that allows users to send instant messages,
              authenticate securely, and communicate seamlessly across
              multiple languages. It features image sharing, API documentation,
              and live communication powered by Socket.io, deployed on AWS EC2."
              ghLink="https://github.com/Amir-017/Chat_App_Test_For_Learning_ITI"
              demoLink="https://drive.google.com/file/d/1bvlQKkcH5294PlaQARI2rV2anIXqp950/view?usp=sharing"
            />
          </Col>



          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={security}
              isBlog={false}
              title="Security With Stripe Payment (Full Stack)"
              description="I used React 19, NestJS, and MongoDB to build this project.
              The entire website is responsive. This project is a secure
              authentication and authorization system that allows users to
              sign up and log in through multiple methods, including traditional
              credentials and OAuth via Google, GitHub, and LinkedIn. It features
              JWT-based session management, encrypted password storage with bcrypt,
              role-based access control, and integrated Stripe payments for secure
              transactions, all built with a modern, fully responsive UI powered
              by Tailwind CSS."
              ghLink="https://github.com/Amir-017/securityAndStripe"
              demoLink="https://security-and-stripe.vercel.app"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
