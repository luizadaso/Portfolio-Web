import React from 'react';
import './App.css';
import { Container, Navbar, Nav, Card, Button } from 'react-bootstrap';
import minhaImagem from './assets/Foto-Tech.png';
import pontoDeLuzImg from './assets/Ponto-de-luz.png';

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
            <Nav.Link 
              href="https://drive.google.com/file/d/1M30CI7YM901dBv9tYCD2_G7fpyzfDMdG/view?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Baixar CV
            </Nav.Link>
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
      <div className="iconesRedes d-flex flex-column flex-md-row justify-content-center align-items-center">
      <a href="https://www.linkedin.com/in/luizadaso/" target="_blank" rel="noopener noreferrer">
        <img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" />
      </a>
      <a href="mailto:analuiza.daso@gmail.com">
        <img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="Gmail" />
      </a>
      <a href="https://api.whatsapp.com/send?phone=5522999955542&text=Ola,+Encontramos+o+seu+curriculo.+Podemos+conversar?" target="_blank" rel="noopener noreferrer">
        <img src="https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white" alt="WhatsApp" />
      </a>
      <a href="https://instagram.com/luizadaso/" target="_blank" rel="noopener noreferrer">
        <img src="https://img.shields.io/badge/-Instagram-%23E4405F?style=for-the-badge&logo=instagram&logoColor=white" alt="Instagram" />
      </a>
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