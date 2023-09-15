import { Container, Nav, Navbar } from "react-bootstrap";
import { navLinks } from "../data/index.js";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const NavbarComponent = () => {
  return (
    <Navbar sticky="top" expand="lg" className="bg-body-tertiary p-3">
      <Container>
        <Navbar.Brand href="#">Apps Solution</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            {navLinks.map((link) => {
              return (
                <div key={link.id} className="nav-link">
                  <NavLink to={link.path}>{link.text}</NavLink>
                </div>
              );
            })}
          </Nav>
          <div className="">
            <button className="btn btn-primary">Join with us</button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
