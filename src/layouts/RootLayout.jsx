import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import NavBarMenu from '../components/NavBarMenu';
import Footer from '../components/Footer';

function RootLayout({children}){
return( 
<>
    <NavBarMenu></NavBarMenu>
    <Footer/>
    <Container>
        { children }
    </Container>
    
</>);
}

export default RootLayout;