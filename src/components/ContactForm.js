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
            <h2>Doug's Contacts</h2>
          </Col>
        </Row>
        <Row>
          <Col sm="4" className="text-center">
            <Button className="btn-link" href="tel:+15094815800">
              <FaPhone /> 1-509-481-5800
            </Button>
            <br />
            <Button className="btn-link" href="mailto:carbfixer@gmail.com">
              <FaEnvelope /> carbfixer@gmail.com
            </Button>
          </Col>
        </Row>
        <Row>
          <Col className="text-center mx-auto">
            <h5>Social</h5>
            <Button className="btn-social-icon" href="https://github.com/MotivatedUser">
              <FaGithubSquare />
            </Button>
            <Button className="btn-social-icon" href="https://www.linkedin.com/in/d-altermatt-motivated-user/">
              <FaLinkedinIn />
            </Button>
            <Button className="btn-social-icon" href="https://twitter.com/altermatt_d/">
              <FaTwitterSquare />
            </Button>
            <Button className="btn-social-icon" href="https://discordapp.com/users/1034946698860052530">
              <FaDiscord />
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default ContactForm;

// import React from "react";
// import { useForm } from "react-hook-form";

// const ContactForm = () => {
//   const { register, handleSubmit, errors } = useForm();

//   const onSubmit = (data) => {
//     const mailtoLink = `mailto:carbfixer@gmail.com?subject=${data.subject}&body=${data.message}`;
//     window.location.href = mailtoLink;
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <input name="subject" ref={register({ required: true })} />
//       {errors.subject && <span>This field is required</span>}
//       <textarea name="message" ref={register({ required: true })} />
//       {errors.message && <span>This field is required</span>}
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default ContactForm;

// import React from "react";
// import { useForm } from "react-hook-form";
// import {
//   Container,
//   Row,
//   Col,
//   Button,
//   Form,
//   FormGroup,
//   Label,
//   Input,
// } from "reactstrap";

// const ContactForm = () => {
//   const { register, reset, handleSubmit, formState: { errors }, } = useForm();

//   const onSubmit = (data) => {
//     console.log(data);
//     const subject = encodeURIComponent('Contact Request from Portfolio Page');
//     const body = encodeURIComponent(`Name: ${data.name}\nEmail: ${data.email}\nMessage: ${data.message}`);
//     const mailtoLink = `mailto:carbfixer@gmail.com?subject=${subject}&body=${body}`;
//     window.location.href = mailtoLink;
//     const confirmed = window.confirm("Are you sure you want to reset?");
//     if (confirmed) {
//       reset();
//     }
//   };

//   return (
//     <Container>
//       <Row>
//         <Col xs="12" md={{ size: 6, offset: 3 }}>
//           <h2>Contact Me</h2>
//           <Form onSubmit={handleSubmit(onSubmit)} >
//             <FormGroup>
//               <Label for="name">Name</Label>
//               <Input
//                 type="text"
//                 name="name"
//                 id="name"
//                 placeholder="Enter your name"
//                 {...register("name:", { required: true })}
//               />
//               {errors.name && (
//                 <span className="text-danger">This field is required</span>
//               )}
//             </FormGroup>
//             <FormGroup>
//               <Label for="email">Email</Label>
//               <Input
//                 type="email"
//                 name="email"
//                 id="email"
//                 placeholder="Enter your email"
//                 {...register("email:", { required: true })}
//               />
//               {errors.email && (
//                 <span className="text-danger">This field is required</span>
//               )}
//             </FormGroup>
//             <FormGroup>
//               <Label for="message">Message</Label>
//               <Input
//                 type="textarea"
//                 name="message"
//                 id="message"
//                 placeholder="Enter your message"
//                 {...register("message:", { required: true })}
//               />
//               {errors.message && (
//                 <span className="text-danger">This field is required</span>
//               )}
//             </FormGroup>
//             <Button type='submit' color="primary" href="mailto:carbfixer@gmail.com">
//               Submit
//             </Button>
//           </Form>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default ContactForm;
