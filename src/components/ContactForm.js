import {
  FaTwitterSquare,
  FaLinkedinIn,
  FaGithubSquare,
  FaDiscord,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import { Container, Row, Col, Button } from "reactstrap";

function ContactForm() {
  return (
    <section id="contact">
      <Container>
        <Row>
          <Col>
            <h1>Doug's Contacts</h1>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <Button className="btn-link mx-auto" aria-label="Phone" href="tel:+15094815800">
              <FaPhone /> 1-509-481-5800
            </Button>
            <br />
            <Button className="btn-link mx-auto" aria-label="Email" href="mailto:reactivedoug@gmail.com">
              <FaEnvelope /> reactivedoug@gmail.com
            </Button>
          </Col>
        </Row>
        <Row>
          <Col className="text-center mx-auto">
            <h1>Social</h1>
            <Button className="btn-social-icon" aria-label="GitHub" href="https://github.com/MotivatedUser">
              <FaGithubSquare />
            </Button>
            <Button className="btn-social-icon" aria-label="LinkedIn" href="https://www.linkedin.com/in/d-altermatt-motivated-user/">
              <FaLinkedinIn />
            </Button>
            <Button className="btn-social-icon" aria-label="Twitter" href="https://twitter.com/altermatt_d/">
              <FaTwitterSquare />
            </Button>
            <Button className="btn-social-icon" aria-label="Discord" href="https://discordapp.com/users/1034946698860052530">
              <FaDiscord />
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default ContactForm;
