
// import React from 'react';
// import { Container, Row, Col } from 'reactstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faMapMarkerAlt, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
// import { faFacebook, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
// import styles from './Footer.module.css';

// const Footer = () => {
//   return (
//     <footer className={`${styles.bgDark} ${styles.textLight} ${styles.py4}`}>
//       <Container>
//         <Row>
//           <Col md={3}>
//             {/* Logo Image */}
//             <img src="/images/logo2.png" alt="Company Logo" className={styles.footerLogo} />
//             <p>
//                   <FontAwesomeIcon icon={faMapMarkerAlt} className={styles.addressIcon} /> 
//                   Plot 250, I-9/2, Islamabad
//                 </p>
//                 <p>
//                   <FontAwesomeIcon icon={faEnvelope} className={styles.addressIcon} /> 
//                   info@bkk.ag
//                 </p>
//                 <p>
//                   <FontAwesomeIcon icon={faPhone} className={styles.addressIcon} /> 
//                   +92 303 0300000
//                 </p>
//           </Col>
//           <Col md={9}>
//             <Row>
             
//               <Col md={3}>
//                 <h5><b>Information</b></h5>
//                 <ul className={styles.listUnstyled}>
//                   <li><a>Careers</a></li>
//                   <li><a>About Us</a></li>
//                   <li><a>FAQs</a></li>
//                 </ul>
//               </Col>
//               <Col md={3}>
//                 <h5><b>Lets Stay in touch!</b></h5>
//                 <ul className={`${styles.listUnstyled} ${styles.dFlex}`}>
//                   <li className={styles.me3}>
//                     <a href="#" title="Facebook">
//                       <FontAwesomeIcon icon={faFacebook} className={`${styles.textWhite} ${styles.iconSize}`} />
//                     </a>
//                   </li>
//                   <li className={styles.me3}>
//                     <a href="#" title="Twitter">
//                       <FontAwesomeIcon icon={faTwitter} className={`${styles.textWhite} ${styles.iconSize}`} />
//                     </a>
//                   </li>
//                   <li className={styles.me3}>
//                     <a href="#" title="LinkedIn">
//                       <FontAwesomeIcon icon={faLinkedin} className={`${styles.textWhite} ${styles.iconSize}`} />
//                     </a>
//                   </li>
//                   <li>
//                     <a href="#" title="Instagram">
//                       <FontAwesomeIcon icon={faInstagram} className={`${styles.textWhite} ${styles.iconSize}`} />
//                     </a>
//                   </li>
//                 </ul>
//               </Col>
//             </Row>
//           </Col>
//         </Row>
//         <Row className="mt-3">
//           <Col>
//             <p className={styles.textCenter}>&copy; {new Date().getFullYear()} Company Name. All rights reserved.</p>
//           </Col>
//         </Row>
//       </Container>
//     </footer>
//   );
// };

// export default Footer;
import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={`${styles.bgDark} ${styles.textLight} ${styles.py4}`}>
            <Container>
                <Row>
                    <Col md={3} className={styles.footerSection}>
                        {/* Logo Image */}
                        <img src="/images/logo2.png" alt="Company Logo" className={styles.footerLogo} />
                        <div className={styles.contactInfo}>
                            <p>
                                <FontAwesomeIcon icon={faMapMarkerAlt} className={styles.addressIcon} />
                                Plot 250, I-9/2, Islamabad
                            </p>
                            <p className={styles.contact}>
                                <FontAwesomeIcon icon={faEnvelope} className={styles.addressIcon} />
                                <span className={styles.underline}>info@bkk.ag</span>
                            </p>
                            <p className={styles.contact}>
                                <FontAwesomeIcon icon={faPhone} className={styles.addressIcon} />
                                <span className={styles.underline}>+92 303 0300000</span>
                            </p>
                        </div>
                    </Col>
                    <Col md={3} className={styles.footerSection}>
                        <h2 className={styles.textWhite}>Information</h2>
                        <ul className={styles.listUnstyled}>
                            <li><a>Careers</a></li>
                            <li><a >Contact Us</a></li>
                            <li><a>FAQs</a></li>
                        </ul>
                    </Col>
                    <Col md={3} className={styles.footerSection}>
                        <h2 className={styles.textWhite}>Who we are</h2>
                        <ul className={styles.listUnstyled}>
                            <li><a >About Us</a></li>
                            <li><a >Product</a></li>
                            <li><a >Services</a></li>
                        </ul>
                    </Col>
                    <Col md={3} className={styles.footerSection}>
                        <h4 className={styles.textWhite}>Let's Stay in Touch!</h4>
                        <ul className={`${styles.listUnstyled} ${styles.dFlex}`}>
                            <li className={styles.me3}>
                                <a href="#" title="Facebook">
                                    <FontAwesomeIcon icon={faFacebook} className={`${styles.textWhite} ${styles.iconSize}`} />
                                </a>
                            </li>
                            <li className={styles.me3}>
                                <a href="#" title="Twitter">
                                    <FontAwesomeIcon icon={faTwitter} className={`${styles.textWhite} ${styles.iconSize}`} />
                                </a>
                            </li>
                            <li className={styles.me3}>
                                <a href="#" title="LinkedIn">
                                    <FontAwesomeIcon icon={faLinkedin} className={`${styles.textWhite} ${styles.iconSize}`} />
                                </a>
                            </li>
                            <li>
                                <a href="#" title="Instagram">
                                    <FontAwesomeIcon icon={faInstagram} className={`${styles.textWhite} ${styles.iconSize}`} />
                                </a>
                            </li>
                        </ul>
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col>
                        <p className={styles.textCenter}>&copy; {new Date().getFullYear()} Company Name. All rights reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
