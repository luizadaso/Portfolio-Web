import './App.css';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import AboutMe from './pages/AboutMe';
import HomePage from './pages/HomePage';
import Projetos from './pages/Projects';
import mail from './assets/mail.svg';
import github from './assets/github.svg';
import linkedin from './assets/linkedin.svg';
import telefone from './assets/phone.svg';
import logo from './assets/logo.png';

function App() {
  return (
    <Router>
      <div>
        <Navbar className="barraSuperior" bg="dark" data-bs-theme="dark">
          <Container className="justify-content-center">
          <Navbar.Brand className="logotipo me-auto d-none d-md-inline" as={Link} to="/">
          <span>
            Ana Dev
          </span>
              <img
                src={logo}
                alt="Logotipo"
                width="30"
                height="30"
                className="d-inline-block align-top"
              />
            </Navbar.Brand>
            <Nav>
              <Nav.Link as={Link} to="/" >Página inicial</Nav.Link>
              <Nav.Link as={Link} to="/sobre-mim">Sobre mim</Nav.Link>
              <Nav.Link as={Link} to="/projetos">Projetos</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <br />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sobre-mim" element={<AboutMe />} />
          <Route path="/projetos" element={<Projetos />} />
        </Routes>
        <ConditionalFooterAndSocialIcons/>
          <Container className="text-center py-3">
            <span style={{ color: 'gray' }}>
              Desenvolvido por @luizadaso <br/> Todos os direitos reservados &copy; {new Date().getFullYear()}
            </span>
          </Container>
      </div>
    </Router>
  );
}

function ConditionalFooterAndSocialIcons() {
  const location = useLocation();
  const hidePaths = ['/sobre-mim', '/projetos'];

  if (hidePaths.includes(location.pathname)) {
    return null;
  }

  return (
    <>
      <SocialIcons />
      <footer className="rodape bg-dark text-white text-center py-3 d-none d-md-block">
        <Container>
          <span>Desenvolvido por @luizadaso</span>
        </Container>
      </footer>
    </>
  );
}

function SocialIcons() {
  return (
    <div className="d-flex flex-column flex-md-row">
      <div className="iconesRedes">
        <a 
          href="https://www.linkedin.com/in/luizadaso/" 
          className="no-underline" 
          target="_blank" 
          rel="noopener noreferrer">
          <img
            src={linkedin}
            alt="linkedin"
            className="img-fluid linkedin-icon ms-1"
          />
          <span className="titulos-icones ms-2 d-inline d-md-none">Meu perfil no Linkedin</span>
        </a>
      </div>
      <div className="iconesRedes">
        <a 
          href="mailto:analuiza.daso@gmail.com" 
          className="no-underline">
          <img
            src={mail}
            alt="e-mail"
            className="img-fluid email-icon ms-1"
          />
          <span className="titulos-icones ms-2 d-inline d-md-none">analuiza.daso@gmail.com</span>
        </a>
      </div>
      <div className="iconesRedes">
        <a 
          href="https://api.whatsapp.com/send?phone=5522999955542&text=Ola,+Encontrei+o+seu+portfolio.+Podemos+conversar?" 
          className="no-underline" 
          target="_blank" 
          rel="noopener noreferrer">
          <img
            src={telefone}
            alt="telefone"
            className="img-fluid telefone-icon ms-1"
          />
          <span className="titulos-icones ms-2 d-inline d-md-none">(22) 99995-5542</span>
        </a>
      </div>
      <div className="iconesRedes">
        <a 
          href="https://github.com/luizadaso" 
          className="no-underline" 
          target="_blank" 
          rel="noopener noreferrer">
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

export default App;