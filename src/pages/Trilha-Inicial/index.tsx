import AlgoritmoImg from "../../img/Algoritmo_tipos.jpg";
import trilha from '../../services/trilhas.json';
import { 
  Algoritmo, 
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
      <Title>{trilha[0].title}</Title>
      <Contexto>
        <SubTitle>{trilha[0].subtitle}</SubTitle>
        <Paragraph>{trilha[0].paragraphOne}</Paragraph>
        <Paragraph>{trilha[0].paragrahTwo}</Paragraph>
        <Link href={trilha[0].link}>Saiba mais!</Link>
      </Contexto>

      <Algoritmo>
        <SubTitle>Algortimo</SubTitle>
        <Paragraph>Lógica de programação se trata de contextualizar a lógica na programação de computadores, visando
        achar a melhor sequência de ações para solucionar determinado problema. Na programação de computadores,
        essa sequência de ações é chamada de algoritmo, que pode ser definido basicamente como um conjunto de ações
                que resultam numa sequência finita de passos. Utiliza-se um algoritmo para atingir um objetivo</Paragraph>
        <Paragraph>Para especificar um algoritmo, você deve ter em mente que primeiro
        é preciso conhecer o problema a ser resolvido. Depois, você terá que
        identificar o problema e mapear o passo a passo para solucioná-lo. Isso
        é detalhar os processos. Essa sequência lógica permitirá chegar a uma
                solução que atenda às convenções para a sua elaboração. </Paragraph>
        <Paragraph>Um algoritmo pode ser representado de três formas. Uma forma de representa-lo é em escrita natural,
        chamada de algoritmo não computacional. Outra forma é o chamado algoritmo computacional, onde o algoritmo
        é implementado através de português estruturado ou em uma linguagem de programação. E a terceira forma de
        representação de um algoritmo é o fluxograma, que utiliza figuras para representar o fluxo dos dados e os
                comandos dos algoritmos. </Paragraph>

        <Link href="https://www.academia.edu/30062425/LIVRO_ALGORITIMOS_LOGICA_E_PROGRAMACAO?pdf">Saiba mais!</Link>
        <Image src={AlgoritmoImg} />
      </Algoritmo>
    </Container>
  );
}

export default TrilhaInicial;
