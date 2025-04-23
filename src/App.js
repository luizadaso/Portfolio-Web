import React from 'react';
import './App.css';
import { Container, Navbar, Nav, Card, Button } from 'react-bootstrap';
import minhaImagem from './assets/Foto-Tech.png';
import pontoDeLuzImg from './assets/Ponto-de-luz.png';
import mail from './assets/mail.svg';
import github from './assets/github.svg';
import linkedin from './assets/linkedin.svg';
import telefone from './assets/phone.svg';
import CV from './assets/CV - Ana Luiza Da Silva Oliveira.pdf';

function App() {
  return (
    <div>
      <Navbar className="barraSuperior" bg="dark" data-bs-theme="dark">
        <Container className="justify-content-center">
          <Nav className="mx-auto">
            <Nav.Link href="#pagina-inicial">Página inicial</Nav.Link>
            <Nav.Link href="#sobre-mim">Sobre mim</Nav.Link>
            <Nav.Link href="#projetos">Projetos</Nav.Link>
            <Nav.Link href="#contato">Contato</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
      <Container className="mt-2 d-flex justify-content-center align-items-center container-body">
        <Card className="cardBody me-3">
          <Card.Title>  
            <div className="meuNome mt-auto text-start">
            <span>Ana Luiza Oliveira</span>
            <img
              src={pontoDeLuzImg}
              alt="ponto de luz dourado" 
              className="img-fluid ponto-de-luz ms-1"
            />
            </div>
          </Card.Title>
          <Card.Text>
          Desenvolvedora Full-stack
          </Card.Text>
          <Card.Text className="d-none d-md-block">
          Desde a infância, a tecnologia sempre foi uma paixão que me impulsionou a explorar e aprender. 
          Comecei minha jornada profissional em suporte técnico, onde desenvolvi habilidades valiosas. 
          Recentemente, decidi dar um passo adiante, iniciando minha graduação em Ciência da Computação. 
          Essa decisão reacendeu meu entusiasmo e estou mergulhada no mundo da programação! 
          </Card.Text>
          <div className="mt-auto text-start">
          <Button className="buttonSaibaMais" href={CV} download="CV - Ana Luiza Da Silva Oliveira.pdf">
              Baixar CV
            </Button>
          </div>
        </Card>
          <img
            src={minhaImagem}
            alt="Descrição da Imagem" 
            className="img-fluid foto-tech"
          />
      </Container>
      <div className="d-flex flex-column flex-md-row justify-content-center align-items-center">
      <div className="iconesRedes">
      <a href="https://www.linkedin.com/in/luizadaso/" target="_blank" rel="noopener noreferrer">
      <img
          src={linkedin}
          alt="linkedin" 
          className="img-fluid ponto-de-luz ms-1" 
      />
      </a>
      </div>
      <div className="iconesRedes">
      <a href="mailto:analuiza.daso@gmail.com">
      <img
          src={mail}
          alt="e-mail" 
          className="img-fluid ponto-de-luz ms-1" 
      />
      </a>
      </div>
      <div className="iconesRedes">
      <a href="https://api.whatsapp.com/send?phone=5522999955542&text=Ola,+Encontramos+o+seu+curriculo.+Podemos+conversar?" target="_blank" rel="noopener noreferrer">
      <img
          src={telefone}
          alt="telefone" 
          className="img-fluid ponto-de-luz ms-1" 
      />
      </a>
      </div>
      <div className="iconesRedes">
        <a href="https://github.com/luizadaso" target="_blank" rel="noopener noreferrer">
          <img
            src={github}
            alt="github" 
            className="img-fluid ponto-de-luz ms-1" 
          />
        </a>
      </div>
    </div>
        <footer className="rodape bg-dark text-white text-center py-3">
        <Container>
        <span>Desenvolvido por @luizadaso</span>
      </Container>
        </footer>
    </div>
  );
}

export default App;