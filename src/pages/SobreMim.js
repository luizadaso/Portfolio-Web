import React, { useState } from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import './SobreMim.css';

function SobreMim() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Container className="mt-2 d-flex justify-content-center align-items-center container-body flex-column flex-md-row">
      <Card className="cardBody me-3 order-2 order-md-1 text-center text-md-start">
        <Card.Header>
          <h2>Minha história na tecnologia</h2>
          <Button className="buttonExpandirHistoria no-underline" onClick={toggleExpand}>
            {isExpanded ? 'Ocultar' : 'Expandir'}
          </Button>
        </Card.Header>
        {isExpanded && (
          <Card.Body>
            <Card.Text>
            Desde a infância, sempre tive uma paixão por tecnologia, especialmente pelos jogos. Entretanto, as limitações financeiras da minha família significavam que, enquanto meus amigos já desfrutavam de um PlayStation 1, eu me contentava com um "polystation", que me proporcionava muitas horas de diversão. Havia um considerável atraso na adoção de novas tecnologias em minha casa. Quando via profissionais da área de tecnologia na televisão, parecia um sonho distante. Sempre ouvi que era necessário ser extremamente inteligente para atuar nesse campo, o que me levou a acreditar que apenas os superdotados poderiam trabalhar em tecnologia. Dessa forma, nunca considerei essa possibilidade para mim.
            O tempo passou e a pergunta que sempre ecoou na minha mente – "O que eu quero ser quando crescer?" – continuava sem resposta. Eu deixava a vida me levar, aceitando as oportunidades que surgiam, mas sem um objetivo profissional claro. Acabei me acomodando em um cargo confortável como suporte técnico de TI, mesmo sem cursos ou experiência na área. Na minha cidade, havia escassez de profissionais qualificados, e eu, mesmo sem formação, consegui uma das vagas. Esse foi o meu primeiro contato profissional com TI, onde atendi grandes clientes. O trabalho era presencial, mas o atendimento ao cliente era remoto. Aprendi a resolver problemas simples e complexos, sempre utilizando a abordagem de tentativa e erro, buscando informações e testando soluções. Eu gostava do que fazia. A rotina era confortável: trabalhava seis horas por dia em uma escala 6x1, rodeada por uma equipe unida e divertida.
            No entanto, a falta de perspectivas profissionais me incomodava. Percebi que o suporte técnico tinha um limite muito restrito para crescimento, algo que, na minha visão, era insatisfatório. Sempre sonhei em grande, mas o vazio da indefinição profissional me atormentava.
            Em dezembro de 2023, candidatei-me a uma vaga na área em que já atuava como suporte técnico, buscando uma oportunidade home office. Após várias candidaturas e reformulações do meu perfil no LinkedIn, fui convidada para uma entrevista. Nela, foi sugerido que eu iniciasse uma graduação para ser efetivada em um nível pleno; caso contrário, seria efetivada como nível júnior. Aceitei o desafio e, no início de 2024, comecei a graduação em Ciência da Computação. Esse novo desafio se tornou um divisor de águas em minha vida. Despertei para o desenvolvimento de software e percebi que, sim, eu poderia entrar nessa área. A partir desse momento, busquei cursos e me aprofundei em um mundo novo, onde posso criar sistemas e softwares que alcançam proporções inimagináveis.
            Após sete anos de experiência no suporte técnico de TI, finalmente encontrei um objetivo profissional com o qual me conecto e que sinto que vale a pena todo o esforço e comprometimento. Vejo que posso ir longe e alcançar grandes conquistas.
            Atualmente, estou em busca da minha transição para a área de desenvolvimento de software. Estar imersa neste novo universo de infinitas possibilidades gera uma sensação de grandeza e motivação que nunca experimentei antes. É incrível ter várias ideias e concretizá-las. Continuo criando projetos pessoais e enfrentando desafios. A longa curva de aprendizado é maravilhosa, pois percebo que nunca haverá um ponto final. Esta área é para a vida toda, sempre haverá algo novo e incrível para aprender.
            </Card.Text>
          </Card.Body>
        )}
      </Card>
    </Container>
  );
}

export default SobreMim;