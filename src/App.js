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
      <Container className="mt-2 d-flex justify-content-center align-items-center container-body">
        <Card className="cardBody me-3" style={{ width: '50rem', height: '30rem' }}>
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
          className="img-fluid foto-tech"
        />
      </Container>
      <Container className="mt-2 d-flex justify-content-center align-items-center container-cards-inferiores">
      <Card className="cards-inferiores me-3  align-items-center">
      <Card.Header>Linkedin</Card.Header>
          <Card.Text>
          <iframe 
            src="https://www.linkedin.com/embed/feed/update/urn:li:share:7310997092972269568?collapsed=1" 
            height="480" 
            width="300" 
            frameborder="0" 
            allowfullscreen="" 
            title="Publicação incorporada">
          </iframe>
          </Card.Text>
        </Card>
        <Card className="cards-inferiores me-3  align-items-center">
      <Card.Header>Github</Card.Header>
          <Card.Text>
            Breve texto de apresentação.
          </Card.Text>
          <div className="mt-auto text-center">
            <Button className="buttons-cards-inferiores" href="#sobre">
              Acesse
            </Button>
          </div>
        </Card>
        <Card className="cards-inferiores me-3  align-items-center">
      <Card.Header>YouTube</Card.Header>
          <Card.Text>
            Breve texto de apresentação.
          </Card.Text>
          <div className="mt-auto text-center">
            <Button className="buttons-cards-inferiores" href="#sobre">
              Acesse
            </Button>
          </div>
        </Card>
        </Container>
    </div>
  );
}

export default App;