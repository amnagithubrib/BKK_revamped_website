
// import React from 'react';
// import { Container, Row, Col } from 'reactstrap';
// import styles from './Slider.module.css';

// const Slider = () => {
//     return (
//         <Container fluid className={styles.slider}>
//             <Row noGutters>
//                 <Col className={styles.slide} style={{ backgroundImage: 'url("/images/Group.png")' }}>
//                     <div className={styles.greenOverlay}></div>
//                     <div className={styles.textOverlay}>
//                         <b>Your One Step Digital Platform</b><br />
//                         <b>For All Things <span className={styles.highlight}>Agriculture</span></b>
//                     </div>
//                 </Col>
//             </Row>
//         </Container>
//     );
// }

// export default Slider;
import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import styles from './Slider.module.css';

const Slider = () => {
    return (
        <Container fluid className={styles.slider}>
            <Row noGutters>
                <Col className={styles.slide} style={{ backgroundImage: 'url("/images/Group.png")' }}>
                    <div className={styles.greenOverlay}></div>
                    <div className={styles.textOverlay}>
                        <div className={styles.vectorImageLeft}>
                            <img src="/images/vector.png" alt="Left Vector" />
                        </div>
                        <div className={styles.text}>
                            <b>Your One Step Digital Platform</b><br />
                            <b>For All Things <span className={styles.highlight}>Agriculture</span></b>
                        </div>
                        <div className={styles.vectorImageRight}>
                            <img src="/images/rightvector.png" alt="Right Vector" />
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Slider;
