// // components/ContactForm.js
// "use client";
// import React from 'react';
// import { Container, Row, Col,  FormGroup, Label, Input, Button } from 'reactstrap';
// import { Form } from 'reactstrap';

// import styles from './Form.module.css';

// const ContactForm = () => {
//   return (
//     <Container style={{ backgroundColor: '#f6ffee', padding: '40px', borderRadius: '10px' }}>
//       <Row>
//         <Col md="6">
//           <h2>Get in touch!</h2>
//           <Form>
//             <FormGroup>
//               <Label for="firstName">First Name</Label>
//               <Input type="text" name="firstName" id="firstName" placeholder="Enter your first name..." />
//             </FormGroup>
//             <FormGroup>
//               <Label for="subject">Subject</Label>
//               <Input type="text" name="subject" id="subject" placeholder="Your subject..." />
//             </FormGroup>
//             <FormGroup>
//               <Label for="message">Message</Label>
//               <Input type="textarea" name="message" id="message" placeholder="Type your message here..." />
//             </FormGroup>
//             <Button color="success">Submit</Button>
//           </Form>
//         </Col>
//         <Col md="6">
//           <img src="/images/image1.png" alt="Image 1" className={`${styles.imgFluid} ${styles.rounded}`} />
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default ContactForm;
// components/ContactForm.js
"use client";
// components/ContactForm.js
import React from 'react';
import { Container, Row, Col, FormGroup, Label, Input, Button } from 'reactstrap';
import { Form } from 'reactstrap';
import styles from './Form.module.css';

const ContactForm = () => {
  return (
    <div className={styles.fullWidthContainer}>
      <Container className={styles.customContainer}>
        <Row>
          <Col md="6">
            <h2><b>Get in touch!</b></h2>
            <Form>
              <FormGroup>
                <Label for="firstName">First Name</Label>
                <Input type="text" name="firstName" id="firstName" placeholder="Enter your first name..." />
              </FormGroup>
              <FormGroup>
                <Label for="subject">Subject</Label>
                <Input type="text" name="subject" id="subject" placeholder="Your subject..." />
              </FormGroup>
              <FormGroup>
                <Label for="message">Message</Label>
                <Input type="textarea" name="message" id="message" placeholder="Type your message here..." />
              </FormGroup>
              <Button color="success">Submit</Button>
            </Form>
          </Col>
          <Col md="6">
            <img src="/images/image1.png" alt="Image 1" className={`${styles.imgFluid} ${styles.rounded}`} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactForm;
