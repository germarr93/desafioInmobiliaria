import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Tienda Montevideo</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <CartWidget />
            <Nav.Link href="#features">Inicio</Nav.Link>
            <Nav.Link href="#pricing">Imagenes</Nav.Link>
            <NavDropdown title="Mas Informacion" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Ropa Nueva 2022
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Ropa Tendencia 2023
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                La mas Vendida
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Informacion extra
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Detalles a actualizar.</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Contactos
            </Nav.Link>
          </Nav>
          <CartWidget />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default NavBar;

//  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
