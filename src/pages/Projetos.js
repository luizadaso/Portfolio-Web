import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import './Projetos.css';

function Projetos() {

  return (
    <Container className="mt-2 d-flex justify-content-center align-items-center container-cards-inferiores">
      <Card className="cards-inferiores me-3 align-items-center">
        <Card.Header>Amigo Secreto</Card.Header>
        <Card.Text>

        </Card.Text>
        <div className="mt-auto text-center">
          <Button className="buttons-cards-inferiores" href="#sobre">
            Acesse
          </Button>
        </div>
      </Card>
      <Card className="cards-inferiores me-3 align-items-center">
        <Card.Header>Pokédex</Card.Header>
        <Card.Text>

        </Card.Text>
        <div className="mt-auto text-center">
          <Button className="buttons-cards-inferiores" href="#sobre">
            Acesse
          </Button>
        </div>
      </Card>
      <Card className="cards-inferiores me-3 align-items-center">
        <Card.Header>Scraping</Card.Header>
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
  );
}

export default Projetos;