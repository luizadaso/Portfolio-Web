import React from 'react';
import './App.css';
import { Container, Navbar, Nav, Card, Button } from 'react-bootstrap';
import minhaImagem from './assets/Foto-Tech.png';

function App() {
  return (
    <div>
      <Navbar className="barraSuperior" bg="dark" data-bs-theme="dark">
        <Container className="justify-content-center">
          <Nav className="mx-auto">
            <Nav.Link href="#inicio">Página inicial</Nav.Link>
            <Nav.Link href="#sobre">Sobre mim</Nav.Link>
            <Nav.Link href="#projetos">Projetos</Nav.Link>
            <Nav.Link href="#contato">Contato</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
      <Container className="mt-2 d-flex justify-content-center align-items-center container-body">
        <Card className="cardBody me-3">
          <Card.Title>Olá! Sejam bem-vindos!</Card.Title>
          <Card.Text>
          Desde a infância, a tecnologia sempre foi uma paixão que me impulsionou a explorar e aprender. 
          Comecei minha jornada profissional em suporte técnico, onde desenvolvi habilidades valiosas. 
          Recentemente, decidi dar um passo adiante, iniciando minha graduação em Ciência da Computação. 
          Essa decisão reacendeu meu entusiasmo e estou mergulhada no mundo da programação! 
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
      <div className="d-flex justify-content-center align-items-center">
      <a href="https://www.linkedin.com/in/luizadaso/" target="_blank" rel="noopener noreferrer">
        <img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" height="25px" alt="LinkedIn" />
      </a>
      <a href="mailto:analuiza.daso@gmail.com">
        <img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" height="25px" alt="Gmail" />
      </a>
      <a href="https://api.whatsapp.com/send?phone=5522999955542&text=Ola,+Encontramos+o+seu+curriculo.+Podemos+conversar?" target="_blank" rel="noopener noreferrer">
        <img src="https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white" height="25px" alt="WhatsApp" />
      </a>
      <a href="https://instagram.com/luizadaso/" target="_blank" rel="noopener noreferrer">
        <img src="https://img.shields.io/badge/-Instagram-%23E4405F?style=for-the-badge&logo=instagram&logoColor=white" height="25px" alt="Instagram" />
      </a>
    </div>
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