import React from 'react';
import './App.css';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import SobreMim from './pages/SobreMim';
import PaginaInicial from './pages/PaginaInicial';
import Projetos from './pages/Projetos'; // Importe a página Projetos
import mail from './assets/mail.svg';
import github from './assets/github.svg';
import linkedin from './assets/linkedin.svg';
import telefone from './assets/phone.svg';

function App() {
  return (
    <Router>
      <div>
        <Navbar className="barraSuperior" bg="dark" data-bs-theme="dark">
          <Container className="justify-content-center">
            <Nav className="mx-auto">
              <Nav.Link as={Link} to="/">Página inicial</Nav.Link>
              <Nav.Link as={Link} to="/sobre-mim">Sobre mim</Nav.Link>
              <Nav.Link as={Link} to="/projetos">Projetos</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <br />
        <Routes>
          <Route path="/" element={<PaginaInicial />} />
          <Route path="/sobre-mim" element={<SobreMim />} />
          <Route path="/projetos" element={<Projetos />} /> {/* Adicione a rota para Projetos */}
        </Routes>
        <SocialIcons />
        <ConditionalFooter />
      </div>
    </Router>
  );
}

function SocialIcons() {
  return (
    <div className="d-flex flex-column flex-md-row justify-content-center align-items-center">
      <div className="iconesRedes">
        <a href="https://www.linkedin.com/in/luizadaso/" className="no-underline" target="_blank" rel="noopener noreferrer">
          <img
            src={linkedin}
            alt="linkedin"
            className="img-fluid linkedin-icon ms-1"
          />
          <span className="titulos-icones ms-2 d-inline d-md-none">Meu perfil no Linkedin</span>
        </a>
      </div>
      <div className="iconesRedes">
        <a href="mailto:analuiza.daso@gmail.com" className="no-underline">
          <img
            src={mail}
            alt="e-mail"
            className="img-fluid email-icon ms-1"
          />
          <span className="titulos-icones ms-2 d-inline d-md-none">analuiza.daso@gmail.com</span>
        </a>
      </div>
      <div className="iconesRedes">
        <a href="https://api.whatsapp.com/send?phone=5522999955542&text=Ola,+Encontrei+o+seu+portfolio.+Podemos+conversar?" className="no-underline" target="_blank" rel="noopener noreferrer">
          <img
            src={telefone}
            alt="telefone"
            className="img-fluid telefone-icon ms-1"
          />
          <span className="titulos-icones ms-2 d-inline d-md-none">(22) 99995-5542</span>
        </a>
      </div>
      <div className="iconesRedes">
        <a href="https://github.com/luizadaso" className="no-underline" target="_blank" rel="noopener noreferrer">
          <img
            src={github}
            alt="github"
            className="img-fluid github-icon ms-1"
          />
          <span className="titulos-icones ms-2 d-inline d-md-none">Repositório no Github</span>
        </a>
      </div>
    </div>
  );
}

function ConditionalFooter() {
  const location = useLocation();
  const hideFooterPaths = ['/sobre-mim', '/projetos'];

  if (hideFooterPaths.includes(location.pathname)) {
    return null;
  }

  return (
    <footer className="rodape bg-dark text-white text-center py-3">
      <Container>
        <span>Desenvolvido por @luizadaso</span>
      </Container>
    </footer>
  );
}

export default App;