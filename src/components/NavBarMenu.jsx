import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { isAccordionItemSelected } from 'react-bootstrap/esm/AccordionContext';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Lab1Page from '../pages/Lab1Page';
import Lab2Page from '../pages/Lab2Page';
import Lab3Page from '../pages/Lab3Page';

const object = {
    1: "/home",
    2: "/lab1"
}

const items = [
    {id: 1, label: "Home", url: "/home", urlPattern: "/", element: <main/>},
    {id: 2, label: "Laboratorium 1", url: "/lab1", urlPattern: "/", element: <Lab1Page/>},
    {id: 3, label: "Laboratorium 2", url: "/lab2/1", urlPattern: "/lab2/:id", element: <Lab2Page/>},
    {id: 4, label: "Laboratorium 3", url: "/lab3", urlPattern: "/", element: <Lab3Page/>}

]

const NavBarMenu = () => {
  return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
            <Navbar.Brand href="#Frameworki frontendowe">Frameworki frontendowe</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                {items.map(item => (
                <Nav.Link key={item.id} href={item.url}>
                    {item.label}
                </Nav.Link>
                ))}
             </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    </>   
  );
};

export default NavBarMenu;