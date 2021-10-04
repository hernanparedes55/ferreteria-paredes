import React from 'react';
import { Navbar,Container,Nav,NavDropdown, NavbarBrand,Form,FormControl,Button} from 'react-bootstrap';
import{NavLink} from 'react-router-dom'
import CartWidget from "./CartWidget/CartWidget";
import './NavBar.css';


export default function NavBar() {
return (
    
<>
<Navbar expand="sm" className="style-NavBar">
  <Container>
    <NavbarBrand><NavLink to="/"><img src='/images/logoFerreteria.png' width="25%"alt="logo" /></NavLink></NavbarBrand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto navegacion">
        <Nav.Link ><NavLink to="/" className='link-nav'  exact activeClassName="link-activo">Inicio</NavLink></Nav.Link>
        <NavDropdown title="Categorías" id="collasible-nav-dropdown" className='link-nav'  exact activeClassName="link-activo" >
          <NavDropdown.Item><Nav.Link ><NavLink to="/category/bebes" className='link-nav'  exact activeClassName="link-activo"> Ferreteria </NavLink></Nav.Link></NavDropdown.Item>
          <NavDropdown.Item><Nav.Link ><NavLink to="/category/girl" className='link-nav'  exact activeClassName="link-activo"> Sanitarios </NavLink></Nav.Link></NavDropdown.Item>
          <NavDropdown.Item><Nav.Link ><NavLink to="/category/boy" className='link-nav'  exact activeClassName="link-activo"> Gas </NavLink></Nav.Link></NavDropdown.Item>
          {/* <NavDropdown.Item href="#action/3.2">Sanitarios</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Cloacas</NavDropdown.Item> */}
          </NavDropdown>
        {/* <Nav.Link ><NavLink to="/category/bebes" className='link-nav'  exact activeClassName="link-activo">Bebés</NavLink></Nav.Link>
        <Nav.Link ><NavLink to="/category/girl" className='link-nav'  exact activeClassName="link-activo">Niñas</NavLink></Nav.Link>
        <Nav.Link ><NavLink to="/category/boy" className='link-nav'  exact activeClassName="link-activo">Niños</NavLink></Nav.Link> */}
        <Nav.Link ><NavLink to="/category/ofertas" className='link-nav'  exact activeClassName="link-activo">Ofertas</NavLink></Nav.Link>
        <Nav.Link ><NavLink to="/contacto" className='link-nav'  exact activeClassName="link-activo">Contacto</NavLink></Nav.Link>
        <Nav.Link ><NavLink to="/nosotros" className='link-nav'  exact activeClassName="link-activo">Nosotros</NavLink></Nav.Link>
        <Form className="d-flex">
        <FormControl
        type="search"
        placeholder="Buscar producto"
        className="mr-2"
        aria-label="Buscar"
      />
      <Button variant="outline-light" >Buscar</Button>
    </Form>
    
        <CartWidget/>        
      </Nav>
    </Navbar.Collapse>
  </Container>
  
</Navbar>
</>

)
}