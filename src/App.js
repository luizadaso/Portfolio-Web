import React from 'react';
import './App.css';
import { Container, Navbar, Nav, Card, Button } from 'react-bootstrap';
import minhaImagem from './assets/Foto-Tech.png';

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
      <Container className="mt-2 d-flex align-items-center">
        <Card className="cardBody me-3" style={{ width: '25rem', height: '25rem' }}>
          <Card.Title>Olá!</Card.Title>
          <Card.Text>
            Breve texto de apresentação.
          </Card.Text>
          <div className="mt-auto text-center">
            <Button className="buttonSaibaMais" href="#sobre">
              Saiba mais
            </Button>
          </div>
        </Card>
        <img
          src={minhaImagem}
          alt="Descrição da Imagem" 
          className="img-fluid"
          style={{ maxWidth: '25rem', height: 'auto' }}
        />
      </Container>
    </div>
  );
}

export default App;