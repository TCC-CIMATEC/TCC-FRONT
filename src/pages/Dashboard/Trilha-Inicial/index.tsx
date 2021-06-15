import PensamentoImg from "../../../assets/pensamento.jpg"

import {
  Container,
  Contexto,
  Image,
  Title,
}
  from './styles';
import Button from "../../../components/Button";
import { Link } from "react-router-dom";

function TrilhaInicial() {
  return (
    <Container>
      <Contexto>
        <Title>Pensamento Computacional</Title>
      </Contexto>

      <Image src={PensamentoImg} />

      <div className="btn-content">
        <Link to="exercicio" >
          <Button title="Próximo" background="#659157" />
        </Link>
      </div>
    </Container>
  );
}

export default TrilhaInicial;
