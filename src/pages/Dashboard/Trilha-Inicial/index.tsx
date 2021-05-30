import AlgoritmoImg from "../../../assets/Algoritmo_tipos.jpg"
import trilha from "../../../services/trilhas.json"

import LightImg from "../../../assets/light.png";

import {
  Container,
  Contexto,
  Image,
  Link,
  Paragraph,
  SubTitle,
  Title,
  Light
}
  from './styles';
import { ButtonDashBoard, CloseButton } from "../../../components/Button";

function TrilhaInicial() {
  return (
    <Container>
      <Contexto>
        <CloseButton />
        <Title>{trilha[0].title}</Title>
        <SubTitle>{trilha[0].subtitle}</SubTitle>
        <Paragraph>{trilha[0].paragraphOne}</Paragraph>
        <Paragraph>{trilha[0].paragrahTwo}</Paragraph>
      </Contexto>

      <Image src={AlgoritmoImg} />
      <Link href={trilha[0].link} target="_blank" style={{ textDecoration: "none" }}>
        <Light>
          <img src={LightImg} alt="Ìcone lâmpada" />
          <span>Saiba mais!</span>
        </Light>
      </Link>

      <div className="btn-content">
        <ButtonDashBoard title="Anterior" background="#D7263D" />
        <ButtonDashBoard title="Próximo" background="#659157" />
      </div>
    </Container>
  );
}

export default TrilhaInicial;
