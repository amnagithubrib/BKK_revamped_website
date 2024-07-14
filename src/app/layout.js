import '../app/styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../app/components/Navbar';
import Slider from '../app/components/Slider';
import Services from '../app/components/Services';
import Telecom from '../app/components/Telecom';
import Form from '../app/components/Form';
import Footer from '../app/components/Footer';
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <Slider />
        <Services />
        <Telecom />
       <Form />
        <Footer />
        {children}
      </body>
    </html>
  );
}
