import { Algoritmo, Container, Contexto, Image, Link, Paragraph, SubTitle, Title } from './styles';
import AlgoritmoImg from "../../img/Algoritmo_tipos.jpg";

function TrilhaInicial() {
  return (
    <Container>
      <Title>Pensamento computacional e sua importância nos dias atuais</Title>
      <Contexto>
        <SubTitle>Introdução</SubTitle>
        <Paragraph>A alta carga de conceitos abstratos nos anos iniciais faz com que o processo de ensino e aprendizagem
        de lógica de programação seja considerado um desafio para estudantes. Programar não é uma tarefa trivial,
        pois envolve algoritmos, lógica de programação e o entendimento de uma linguagem específica, sendo
        aplicados conforme as regras de negócio de cada problema. Devido à essas dificuldades, somadas à altas
        taxas de reprovação e desistências nos cursos dessa área, percebe-se um interesse cada vez menor das
            pessoas em aprender programação.</Paragraph>
        <Paragraph>Todavia, em pleno século 21, é importante que cada cidadão compreenda pelo menos os princípios básicos
        da Ciência da Computação, visto que o ponto crucial desta ciência é a compreensão e habilidade de
        desenvolver algoritmos. Logo, é válido aprender lógica de programação desde cedo, já que não é uma tarefa
        simples e, se for compreendida cedo, irá beneficiar os futuros ingressantes na área. Ao mesmo tempo,
        aqueles que optarem por outros ramos profissionais teriam desenvolvido habilidades que seriam úteis em
            suas respectivas áreas de conhecimento. </Paragraph>
        <Link href="https://books.google.com.br/books?hl=pt-BR&lr=&id=-R1nDwAAQBAJ&oi=fnd&pg=PT9&dq=l%C3%B3gica+de+programa%C3%A7%C3%A3o&ots=RD_hbH3uAh&sig=tETh9E-kSKOoDx8OtYjXGIqTErg#v=onepage&q=l%C3%B3gica%20de%20programa%C3%A7%C3%A3o&f=false">Saiba mais!</Link>
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
