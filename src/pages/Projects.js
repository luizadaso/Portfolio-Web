import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import './Projects.css';
import amigoSecreto from '../img/amigo-secreto.png';
import pokedex from '../img/pokedex.png';
import telaLogin from '../img/tela-login.png';

function Projects() {

  return (
    <Container className="container-cards-inferiores mt-0">
      <Card className="cards-inferiores me-2">
        <Card.Header><h2>Amigo Secreto</h2></Card.Header>
        <Card.Text>
            Sorteador de Amigo Secreto com gerador de QR Code.
        </Card.Text>
        <div className="mt-1 row text-center">
        <div>
          <img
            src={amigoSecreto}
            alt="amigo-secreto"
            className="imagens-projetos img-fluid ms-1"
          />
        </div>
          <Button 
            className="buttons-cards-inferiores" 
            href="https://luizadaso.github.io/Projeto-Challenge-Amigo-Secreto/"
            target="_blank" 
            rel="noopener noreferrer">
            Acesse o projeto
          </Button>
          <Button 
            className="buttons-cards-inferiores" 
            href="https://github.com/luizadaso/Projeto-Challenge-Amigo-Secreto"
            target="_blank" 
            rel="noopener noreferrer">
            Repositório
          </Button>
        </div>
      </Card>
      <Card className="cards-inferiores me-2">
        <Card.Header><h2>Pokédex</h2></Card.Header>
        <Card.Text>
            Busque e visualize informações detalhadas sobre os Pokémons.
        </Card.Text>
        <div className="mt-1 row text-center">
        <div>
          <img
            src={pokedex}
            alt="pokedex"
            className="imagens-projetos img-fluid ms-1"
          />
        </div>
          <Button 
            className="buttons-cards-inferiores" 
            href="https://pokedex-da-ana.vercel.app/"
            target="_blank" 
            rel="noopener noreferrer">
            Acesse o projeto
          </Button>
          <Button 
            className="buttons-cards-inferiores" 
            href="https://github.com/luizadaso/Pokedex-da-Ana"
            target="_blank" 
            rel="noopener noreferrer">
            Repositório
          </Button>
        </div>
      </Card>
      <Card className="cards-inferiores me-2">
        <Card.Header><h2>Tela de Login</h2></Card.Header>
        <Card.Text>
            Página de login com validação dos campos de e-mail e senha.
        </Card.Text>
        <div className="mt-1 row text-center">
        <div>
          <img
            src={telaLogin}
            alt="amigo-secreto"
            className="imagens-projetos img-fluid ms-1"
          />
        </div>
          <Button 
            className="buttons-cards-inferiores" 
            href="https://github.com/luizadaso/Tela-de-Login-e-Recuperacao-de-Senha"
            target="_blank" 
            rel="noopener noreferrer">
            Repositório
          </Button>
        </div>
      </Card>
    </Container>
  );
}

export default Projects;