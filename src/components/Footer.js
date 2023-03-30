import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import {
  FaLinkedinIn,
  FaEnvelope,
  FaTwitterSquare,
  FaGithubSquare,
  FaSlack,
  FaDiscord,
} from "react-icons/fa";
import { FcPhone } from "react-icons/fc";

const Footer = () => {
  return (
    <footer className="site-footer">
      <Container>
        <Row>
          <Col xs={{ size: 4, offset: 1 }} sm="2">
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/projects">Projects</Link>
              </li>
              <li>
                <Link to="/resume">Resume</Link>
              </li>
              <li>
                <Link to="/skills">Skills</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </Col>
          <Col xs="6" sm="3" className="text-center">
            <h5>Social</h5>
            <a className="btn btn-social-icon" href="http://twitter.com/">
              <FaTwitterSquare />
            </a>{" "}
            <a className="btn btn-social-icon" href="http://linkedin.com/">
              <FaLinkedinIn />
            </a>{" "}
            <a className="btn btn-social-icon" href="http://github.com/">
              <FaGithubSquare />
            </a>
            <a className="btn btn-social-icon" href="http://slack.com/">
              <FaSlack />
            </a>
            <a className="btn btn-social-icon" href="http://discord.com/">
              <FaDiscord />
            </a>
          </Col>
          <Col sm="4" className="text-center">
            <a role="button" className="btn btn-link" href="tel:+15094815800">
              <FcPhone /> 1-509-481-5800
            </a>
            <br />
            <a
              role="button"
              className="btn btn-link"
              href="mailto:carbfixer@gmail.com"
            >
              <FaEnvelope /> carbfixer@Gmail.com
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
