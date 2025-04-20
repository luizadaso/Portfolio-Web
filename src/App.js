import React from 'react';
import './App.css';
import { Container, Navbar, Nav, Card, Button } from 'react-bootstrap';

function App() {
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container className="justify-content-center">
          <Nav className="mx-auto">
            <Nav.Link href="#inicio">Página inicial</Nav.Link>
            <Nav.Link href="#sobre">Sobre</Nav.Link>
            <Nav.Link href="#projetos">Projetos</Nav.Link>
            <Nav.Link href="#contato">Contato</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />

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