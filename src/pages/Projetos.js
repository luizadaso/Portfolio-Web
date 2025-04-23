import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import './Projetos.css';
import amigoSecreto from '../img/amigo-secreto.png';
import pokedex from '../img/pokedex.png';
import telaLogin from '../img/tela-login.png';

function Projetos() {

  return (
    <Container className="mt-2 d-flex justify-content-center align-items-center container-cards-inferiores">
      <Card className="cards-inferiores me-3 align-items-center">
        <Card.Header>Amigo Secreto</Card.Header>
        <Card.Text>
            Sorteador de Amigo Secreto com gerador de QR Code.
        </Card.Text>
        <div className="mt-auto text-center">
        <a href="https://luizadaso.github.io/Projeto-Challenge-Amigo-Secreto/" className="no-underline">
          <img
            src={amigoSecreto}
            alt="amigo-secreto"
            className="img-fluid ms-1"
          />
        </a>
          <Button className="buttons-cards-inferiores" href="https://luizadaso.github.io/Projeto-Challenge-Amigo-Secreto/">
            Acesse
          </Button>
        </div>
      </Card>
      <Card className="cards-inferiores me-3 align-items-center">
        <Card.Header>Pokédex</Card.Header>
        <Card.Text>
            Busque e visualizze informações detalhadas sobre os Pokémons.
        </Card.Text>
        <div className="mt-auto text-center">
        <a href="https://pokedex-da-ana.vercel.app/" className="no-underline">
          <img
            src={pokedex}
            alt="pokedex"
            className="img-fluid ms-1"
          />
        </a>
          <Button className="buttons-cards-inferiores" href="https://pokedex-da-ana.vercel.app/">
            Acesse
          </Button>
        </div>
      </Card>
      <Card className="cards-inferiores me-3 align-items-center">
        <Card.Header>Página de Login</Card.Header>
        <Card.Text>
            Página de login com validação dos campos de e-mail e senha.
        </Card.Text>
        <div className="mt-auto text-center">
        <a href="https://github.com/luizadaso/Teste-de-Web-Scraping" className="no-underline">
          <img
            src={telaLogin}
            alt="amigo-secreto"
            className="img-fluid ms-1"
          />
        </a>
          <Button className="buttons-cards-inferiores" href="https://github.com/luizadaso/Tela-de-Login-e-Recuperacao-de-Senha">
            Acesse
          </Button>
        </div>
      </Card>
    </Container>
  );
}

export default Projetos;