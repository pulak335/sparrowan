import Image from 'next/image';
import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Toplogo from '../assets/logo/logo.jpeg'

function NavScroll() {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <Image src={Toplogo} alt="sparrowan" width={200}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="me-auto my-2 my-lg-0 justify-content-end"
            style={{ maxHeight: '100px' }}
            navbarScroll>
          <Nav>
          <Link href="/">Home</Link>
            <Link href="/service">Services</Link>
            <Link href="/industrie">Industries</Link>
            <Link href="/partner">Our Partner</Link>
            <NavDropdown title="About">
              <Link href="/aboutus">
                About Us
              </Link>
              <NavDropdown.Divider />
              <Link href="/career">
                Career
              </Link>
            </NavDropdown>
            <Link href="/contactus">Contact Us</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScroll;