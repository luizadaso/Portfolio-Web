// src/pages/PaginaInicial.js
import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import minhaImagem from '../assets/Foto-Tech.png';
import pontoDeLuzImg from '../assets/Ponto-de-luz.png';
import CV from '../assets/CV - Ana Luiza Da Silva Oliveira.pdf';

function PaginaInicial() {
  return (
    <Container className="mt-2 d-flex justify-content-center align-items-center container-body flex-column flex-md-row">
      <Card className="cardBody me-3 order-2 order-md-1 text-center text-md-start">
        <Card.Title>
          <div className="meuNome mt-auto text-center text-md-start">
            <span>Ana Luiza Oliveira</span>
            <img
              src={pontoDeLuzImg}
              alt="ponto de luz dourado"
              className="img-fluid ponto-de-luz ms-1 text-center text-md-start"
            />
          </div>
        </Card.Title>
        <Card.Text className="Frase-cargo">
          Desenvolvedora Full-stack
        </Card.Text>
        <Card.Text className="d-none d-md-block">
          Desde a infância, a tecnologia sempre foi uma paixão que me impulsionou a explorar e aprender.
          Comecei minha jornada profissional em suporte técnico, onde desenvolvi habilidades valiosas.
          Recentemente, decidi dar um passo adiante, iniciando minha graduação em Ciência da Computação.
          Essa decisão reacendeu meu entusiasmo e estou mergulhada no mundo da programação!
        </Card.Text>
        <div className="mt-auto text-center text-md-start">
          <Button className="buttonBaixarCV" href={CV} download="CV - Ana Luiza Da Silva Oliveira.pdf">
            Baixar CV
          </Button>
        </div>
      </Card>
      <img
        src={minhaImagem}
        alt="Descrição da Imagem"
        className="img-fluid foto-tech order-1 order-md-2"
      />
    </Container>
  );
}

export default PaginaInicial;