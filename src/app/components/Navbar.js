
// "use client";
// import { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import Link from 'next/link';
// import Image from 'next/image';
// import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'; // Correct import for ArrowDropDown icon
// import { WiDaySunny, WiCloudy, WiRain, WiSnow } from 'react-icons/wi'; // Import weather icons
// import styles from './Navbar.module.css';

// const CustomNavbar = () => {
//   const router = useRouter();
//   const [expanded, setExpanded] = useState(false);

//   const handleToggle = () => {
//     setExpanded(!expanded);
//   };

//   return (
//     <Navbar bg="light" expand="lg" className={styles.navbar} expanded={expanded}>
//       <Container>
//         <Navbar.Brand href="/">
//           <Image src="/images/logo.webp" alt="Logo" width={100} height={50} />
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle} />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="ms-auto">
//             <NavDropdown
//               title={
//                 <div className={styles.dropdownContainer}>
//                   <span className={styles.temperature}>
//                     34°C Islamabad, Pakistan <ArrowDropDownIcon className={styles.arrowIcon} />
//                   </span>
//                 </div>
//               }
//               id="basic-nav-dropdown"
//               align="end"
//               className={styles.customDropdown}
//             >
//               <NavDropdown.Item>
//                 <WiDaySunny className={styles.weatherIconDropdown} />
//                 34°C MON
//               </NavDropdown.Item>
//               <NavDropdown.Item>
//                 <WiCloudy className={styles.weatherIconDropdown} />
//                 32°C TUE
//               </NavDropdown.Item>
//               <NavDropdown.Item>
//                 <WiRain className={styles.weatherIconDropdown} />
//                 30°C WED
//               </NavDropdown.Item>
//             </NavDropdown>
//             <Nav.Link href="/" className={router.pathname === "/" ? styles.active : styles.navLink}>
//               Home
//             </Nav.Link>
//             <Nav.Link href="/careers" className={router.pathname === "/careers" ? styles.active : styles.navLink}>
//               Careers
//             </Nav.Link>
//             <Nav.Link href="/agri-store" className={router.pathname === "/agri-store" ? styles.active : styles.navLink}>
//               Agri Store
//             </Nav.Link>
//             <Nav.Link href="/contact" className={router.pathname === "/contact" ? styles.active : styles.navLink}>
//               Contact Us
//             </Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// };

// export default CustomNavbar;
"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { WiDaySunny, WiCloudy, WiRain } from 'react-icons/wi';
import styles from './Navbar.module.css';

const CustomNavbar = () => {
  const router = useRouter();
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <Navbar bg="light" expand="lg" className={styles.navbar} expanded={expanded}>
      <Container>
        <Navbar.Brand href="/">
          <Image src="/images/logo.webp" alt="Logo" width={100} height={50} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavDropdown
              title={
                <div className={styles.dropdownContainer}>
                  <span className={styles.temperature}>
                    34°C Islamabad, Pakistan <ArrowDropDownIcon className={styles.arrowIcon} />
                  </span>
                </div>
              }
              id="basic-nav-dropdown"
              align="end"
              className={styles.customDropdown} // Ensure this class is applied
            >
              <NavDropdown.Item>
                <WiDaySunny className={styles.weatherIconDropdown} />
                34°C MON
              </NavDropdown.Item>
              <NavDropdown.Item>
                <WiCloudy className={styles.weatherIconDropdown} />
                32°C TUE
              </NavDropdown.Item>
              <NavDropdown.Item>
                <WiRain className={styles.weatherIconDropdown} />
                30°C WED
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/" className={router.pathname === "/" ? styles.active : styles.navLink}>
              Home
            </Nav.Link>
            <Nav.Link href="/careers" className={router.pathname === "/careers" ? styles.active : styles.navLink}>
              Careers
            </Nav.Link>
            <Nav.Link href="/agri-store" className={router.pathname === "/agri-store" ? styles.active : styles.navLink}>
              Agri Store
            </Nav.Link>
            <Nav.Link href="/contact" className={router.pathname === "/contact" ? styles.active : styles.navLink}>
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
