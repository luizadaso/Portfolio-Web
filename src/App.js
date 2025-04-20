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
      <div>
      <Container className="mt-4">
        <div className="d-flex justify-content-start">
          <Card className="card-sobre" style={{ width: '25rem', height: '25rem' }}>
            <Card.Body className="cardBody">
              <Card.Title>Olá!</Card.Title>
              <Card.Text>
                Breve texto de apresentação.
              </Card.Text>
              <Button className="buttonSaibaMais" href="#sobre">Saiba mais</Button>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </div>
    </div>
  );
}

export default App;