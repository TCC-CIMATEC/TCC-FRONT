import Container from "../Home/styles";
import { SobreContent, Wrapper } from "./styles";
import LogoImg from '../../../assets/CodeWings.svg';

function Sobre() {
    return (
        <Container>
            <Wrapper>
                <SobreContent>
                    <h1>Sobre o projeto</h1>
                    <p>O Code Wings é o resultado do Trabalho de Conclusão de Curso (TCC) do Curso Técnico em Desenvolvimento de Sistemas do SENAI Cimatec, turma de 2021.1. </p>
                    <p>Sabemos o quão difícil é aprender algo novo, e quão difícil é entender esse novo universo de programação! Antes de aprender uma linguagem de programação, é importante entender os fundamentos de Pensamento Computacional e Lógica de Programação. Vários estudos apontam como é grande o número de desistências em cusos de computação, e quanto isso contrasta com o número de ofertas de trabalho na área de TI.</p>
                    <p>Por isso, queremos tornar o aprendizado inicial em uma forma simples e lúdica, usando os princípios de gamificação para o ensino de Pensamento Computacional e Lógica de Programação.</p>
                </SobreContent>
                <img src={LogoImg} alt="Imagem do grupo" />
            </Wrapper>
        </Container>
    );
}

export default Sobre;