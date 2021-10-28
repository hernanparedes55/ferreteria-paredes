import React from 'react';
import { Navbar,Container,Nav,NavDropdown, NavbarBrand,NavLink} from 'react-bootstrap';
import{Link} from 'react-router-dom';
import CartWidget from "./CartWidget/CartWidget";
import './NavBar.css';


export default function NavBar() {
return (
    
<>
<Navbar expand="sm" className="style-NavBar">
  <Container>
    <NavbarBrand><Link to="/"><img src='/images/logoFerreteria.png' width="25%"alt="logo" /></Link></NavbarBrand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto navegacion">
        <NavLink ><Link to="/" className='link-nav'  activeclassname="link-activo">Inicio</Link></NavLink>
        <NavLink ><Link to="/products" className='link-nav'   activeclassname="link-activo">Productos</Link></NavLink>

        <NavDropdown title="Categorias" id="collasible-nav-dropdown" className='link-nav'  activeclassname="link-activo" >
          <NavDropdown.Item><NavLink><Link to="/category/Electricidad" className='link-nav'   activeclassname="link-activo" > Electricidad </Link></NavLink></NavDropdown.Item>
          <NavDropdown.Item><NavLink ><Link to="/category/Herramientas" className='link-nav'   activeclassname="link-activo"> Herramientas </Link></NavLink></NavDropdown.Item>
          <NavDropdown.Item><NavLink ><Link to="/category/Jardineria" className='link-nav'   activeclassname="link-activo"> Jardineria </Link></NavLink></NavDropdown.Item>
          {/* <NavDropdown.Item href="#action/3.2">Sanitarios</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Cloacas</NavDropdown.Item> */}
          </NavDropdown>
               
        <Nav.Link ><Link to="/contacto" className='link-nav'   activeClassName="link-activo">Contacto</Link></Nav.Link>
        <Nav.Link ><Link to="/nosotros" className='link-nav'   activeClassName="link-activo">Nosotros</Link></Nav.Link>
        
        {/* <Form className="d-flex">
        <FormControl
        type="search"
        placeholder="Buscar producto"
        className="mr-2"
        aria-label="Buscar"
      />
      <Button variant="outline-light" >Buscar</Button>
    </Form> */}
    
        <CartWidget className="d-flex"/>        
      </Nav>
    </Navbar.Collapse>
  </Container>
  
</Navbar>
</>

)
}