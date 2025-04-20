import React from 'react';
import './App.css';
import { Container, Navbar, Nav, Card, Button } from 'react-bootstrap';

function App() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Meu Portfólio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Início</Nav.Link>
            <Nav.Link href="#projects">Projetos</Nav.Link>
            <Nav.Link href="#contact">Contato</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Container className="mt-4">
        <Card>
          <Card.Body>
            <Card.Title>Bem-vindo ao meu portfólio!</Card.Title>
            <Card.Text>
              Sou um desenvolvedor de software com experiência em várias tecnologias.
            </Card.Text>
            <Button variant="primary">Saiba mais</Button>
          </Card.Body>
        </Card>
      </Container>

      {/* Aqui você pode adicionar mais seções, como projetos e contato */}
    </div>
  );
}

export default App;