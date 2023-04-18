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
          <Col sm="4" className="text-center">
            <h3>
              <strong>Links</strong>
            </h3>
            <ul className="list-unstyled">
              <li>
                <Link className="blue" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="blue" to="/about">
                  About
                </Link>
              </li>
              <li>
                <Link className="blue" to="/projects">
                  Projects
                </Link>
              </li>
              <li>
                <Link className="blue" to="/resume">
                  Resume
                </Link>
              </li>
              <li>
                <Link className="blue" to="/skills">
                  Skills
                </Link>
              </li>
              <li>
                <Link className="blue" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </Col>
          <Col sm="4" className="text-center">
            <h3 className="footer-h3">
              <strong>Social</strong>
            </h3>
            <a
              className="btn btn-social-icon"
              href="https://github.com/MotivatedUser"
              aria-label="GitHub"
            >
              <FaGithubSquare className="footer-icon" />
            </a>
            <a
              className="btn btn-social-icon"
              href="https://www.linkedin.com/in/d-altermatt-motivated-user"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn className="footer-icon blue" />
            </a>
            <a
              className="btn btn-social-icon"
              href="https://twitter.com/altermatt_d"
              aria-label="Twitter"
            >
              <FaTwitterSquare className="footer-icon blue" />
            </a>
            <a
              className="btn btn-social-icon"
              href="https://discordapp.com/users/1034946698860052530"
              aria-label="Discord"
            >
              <FaDiscord className="footer-icon" />
            </a>
          </Col>
          <Col sm="4" className="text-center">
            <h3 className="footer-h3">
              <strong>Contact</strong>
            </h3>
            <a
              role="button"
              className="btn btn-link footer-link"
              href="tel:+15094815800"
              aria-label="Phone"
            >
              <FcPhone className="blue" /> 1-509-481-5800
            </a>
            <br />
            <a
              role="button"
              className="btn btn-link footer-link"
              href="mailto:reactivedoug@gmail.com"
              aria-label="Email"
            >
              <FaEnvelope className="blue" /> reactivedoug@gmail.com
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
