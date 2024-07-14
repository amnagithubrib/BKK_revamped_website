// // "use client";
// // import React from 'react';
// // import { Container, Row, Col } from 'reactstrap';
// // import 'bootstrap/dist/css/bootstrap.min.css';
// // import './Telecom.module.css';
// // const Telecom = () => {
// //   return (
// //     <Container className="form-container my-5">
// //       <Row>
// //         <Col md="6" className="text-center text-md-left">
// //           <h2><b>Subscribe to your telecom solution</b></h2>
// //           <Row className="icons-container my-4">
// //             <Col xs="6" sm="3">
// //               <img src="/images/zong.png" alt="Zong" className="img-fluid" />
// //             </Col>
// //             <Col xs="6" sm="3">
// //               <img src="/images/ufone.png" alt="Ufone" className="img-fluid" />
// //             </Col>
// //             <Col xs="6" sm="3">
// //               <img src="/images/jazz.png" alt="JazzCash" className="img-fluid" />
// //             </Col>
// //             <Col xs="6" sm="3">
// //               <img src="/images/scd.png" alt="SCO" className="img-fluid" />
// //             </Col>
// //           </Row>
// //         </Col>
// //         <Col md="6">
// //           <img src="/images/network.png" alt="World Map" className="img-fluid rounded" />
// //         </Col>
// //       </Row>
// //     </Container>
// //   );
// // }

// // export default Telecom;
// "use client";
// import React from 'react';
// import { Container, Row, Col, Card, CardBody, CardImg } from 'reactstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './Telecom.module.css';

// const Telecom = () => {
//   return (
//     <Container className="form-container my-5">
//       <Row>
//         <Col md="6" className="text-center text-md-left">
//           <h2><b>Subscribe to your telecom solution</b></h2>
//           <Row className="icons-container my-4">
//             <Col xs="6" sm="3" className="d-flex align-items-stretch">
//               <Card className="telecom-card">
//                 <CardImg top src="/images/zong.png" alt="Zong" />
//               </Card>
//             </Col>
//             <Col xs="6" sm="3" className="d-flex align-items-stretch">
//               <Card className="telecom-card">
//                 <CardImg top src="/images/ufone.png" alt="Ufone" />
//               </Card>
//             </Col>
//             <Col xs="6" sm="3" className="d-flex align-items-stretch">
//               <Card className="telecom-card">
//                 <CardImg top src="/images/jazz.png" alt="JazzCash" />
//               </Card>
//             </Col>
//             <Col xs="6" sm="3" className="d-flex align-items-stretch">
//               <Card className="telecom-card">
//                 <CardImg top src="/images/scd.png" alt="SCO" />
//               </Card>
//             </Col>
//           </Row>
//         </Col>
//         <Col md="6">
//           <img src="/images/network.png" alt="World Map" className="img-fluid rounded" />
//         </Col>
//       </Row>
//     </Container>
//   );
// }

// export default Telecom;
"use client";
import React from 'react';
import { Container, Row, Col, Card, CardImg } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Telecom.module.css';

const Telecom = () => {
  return (
    <Container className={`${styles['form-container']} my-5`}>
      <Row>
        <Col md="6" className="text-center text-md-left">
          <h2><b>Subscribe to your telecom solution</b></h2>
          <Row className={`icons-container my-4 ${styles['icons-container']}`}>
            <Col xs="6" sm="3" className="d-flex align-items-stretch">
              <Card className={styles['telecom-card']}>
                <CardImg top src="/images/zong.png" alt="Zong" className={styles['card-img']} />
              </Card>
            </Col>
            <Col xs="6" sm="3" className="d-flex align-items-stretch">
              <Card className={styles['telecom-card']}>
                <CardImg top src="/images/ufone.png" alt="Ufone" className={styles['card-img']} />
              </Card>
            </Col>
            <Col xs="6" sm="3" className="d-flex align-items-stretch">
              <Card className={styles['telecom-card']}>
                <CardImg top src="/images/jazz.png" alt="JazzCash" className={styles['card-img']} />
              </Card>
            </Col>
            <Col xs="6" sm="3" className="d-flex align-items-stretch">
              <Card className={styles['telecom-card']}>
                <CardImg top src="/images/scd.png" alt="SCO" className={styles['card-img']} />
              </Card>
            </Col>
          </Row>
        </Col>
        <Col md="6">
          <img src="/images/network.png" alt="World Map" className="img-fluid rounded" />
        </Col>
      </Row>
    </Container>
  );
}

export default Telecom;
