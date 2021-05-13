import AlgoritmoImg from "../../assets/Algoritmo_tipos.jpg";
import trilha from '../../services/trilhas.json';
import { Container,
  Title,
  SubTitle,
  Paragraph,
  Contexto,
  Link,
  Image

} from "../Dashboard/Trilha-Inicial/styles";


function TrilhaInicial() {
  return (
    <Container>
      <Contexto>

        <Title>{trilha[0].title}</Title>
        <SubTitle>{trilha[0].subtitle}</SubTitle>
        <Paragraph>{trilha[0].paragraphOne}</Paragraph>
        <Paragraph>{trilha[0].paragrahTwo}</Paragraph>
        <Link href={trilha[0].link} target = "_blank">Saiba mais!</Link>

        <SubTitle>{trilha[1].title}</SubTitle>
        <Paragraph>{trilha[1].paragraphOne}</Paragraph>
        <Paragraph>{trilha[1].paragrahTwo}</Paragraph>
        <Link href={trilha[1].link} target = "_blank">Saiba mais!</Link>

      </Contexto>

      <Image src={AlgoritmoImg} />
      
    </Container>
  );
}

export default TrilhaInicial;
