import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import {
  FaLinkedinIn,
  FaEnvelope,
  FaTwitterSquare,
  FaGithubSquare,
  FaDiscord,
} from "react-icons/fa";
import { FcPhone } from "react-icons/fc";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col  sm="4" className="text-center">
            <h5><strong>Links</strong></h5>
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
          <Col sm="4" className="text-center">
            <h5 className="footer-h5" ><strong>Social</strong></h5>
            <a
              className="btn btn-social-icon"
              href="https://github.com/MotivatedUser"
            >
              <FaGithubSquare className="footer-icon" />
            </a>
            <a
              className="btn btn-social-icon"
              href="https://www.linkedin.com/in/d-altermatt-motivated-user"
            >
              <FaLinkedinIn className="footer-icon blue" />
            </a>
            <a
              className="btn btn-social-icon"
              href="https://twitter.com/altermatt_d"
            >
              <FaTwitterSquare className="footer-icon blue" />
            </a>
            <a
              className="btn btn-social-icon"
              href="https://discordapp.com/users/1034946698860052530"
            >
              <FaDiscord className="footer-icon" />
            </a>
          </Col>
          <Col sm="4" className="text-center">
            <h5 className="footer-h5"><strong>Contact</strong></h5>
            <a role="button" className="btn btn-link footer-link" href="tel:+15094815800">
              <FcPhone className="" /> 1-509-481-5800
            </a>
            <br />
            <a
              role="button"
              className="btn btn-link footer-link"
              href="mailto:reactivedoug@gmail.com"
            >
              <FaEnvelope className="" /> reactivedoug@gmail.com
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
