import AlgoritmoImg from "../../img/Algoritmo_tipos.jpg";
import trilha from '../../services/trilhas.json';
import { 
  Container, 
  Contexto, 
  Image, 
  Link, 
  Paragraph, 
  SubTitle, 
  Title } 
from './styles';

function TrilhaInicial() {
  return (
    <Container>
      
      <Contexto>

        <Title>{trilha[0].title}</Title>
        <SubTitle>{trilha[0].subtitle}</SubTitle>
        <Paragraph>{trilha[0].paragraphOne}</Paragraph>
        <Paragraph>{trilha[0].paragrahTwo}</Paragraph>
        <Link href={trilha[0].link}>Saiba mais!</Link>

        <Title>{trilha[1].title}</Title>
        <Paragraph>{trilha[1].paragraphOne}</Paragraph>
        <Paragraph>{trilha[1].paragrahTwo}</Paragraph>
        <Link href={trilha[1].link}>Saiba mais!</Link>

      </Contexto>

      <Image src={AlgoritmoImg} />
      
    </Container>
  );
}

export default TrilhaInicial;
