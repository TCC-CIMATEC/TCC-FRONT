import * as FaIcons from "react-icons/fa";
import { useHistory } from "react-router-dom";
import PensamentoImg from "../../../assets/pensamento_questao.jpg"
import { useAuth } from "../../../hooks/AuthContext";
import api from "../../../services/api";
import {
  Container,
  Contexto,
  Image,
  Link,
  Title,
  Questions
}
  from './styles';

function Exercicio() {
  const {user} = useAuth();
  const history = useHistory();

  async function handleClickQuestion(question: number){
    if(question === 1){
      try {
        const newLevel = {
          aluno: user.email,
          nivel: 3,
          pontuacao: 20
        }
        await api.put('jogador/update/', newLevel)
      } catch {
        console.error('Erro ao computar sua questão, tente novamente.')
        return;
      } finally {
        history.push('confirma-questao')
      }
    } else {
      history.push('errou-questao')
    }
  }

  return (
    <Container>
      <Contexto>
        <Title>Atividade</Title>
        <Image src={PensamentoImg} />
        <Questions>
          <li 
            onClick={() => handleClickQuestion(1)}
            className="blue"
          >
            <Link>
              <span><FaIcons.FaCircle /></span>
              <p>Lógica da programação e como funcionam os algoritmos</p>
            </Link>
          </li>

          <li 
            onClick={() => handleClickQuestion(2)}
            className="green"
          >
            <Link>
              <span><FaIcons.FaHeart /></span>
              <p>A maneira como funcionam os sites e as redes sociais.</p>
            </Link>
          </li>

          <li 
            onClick={() => handleClickQuestion(3)}
            className="red"
          >
            <Link>
              <span><FaIcons.FaMoon /></span>
              <p>O manuseio e a função dos aplicativos digitais.</p>
            </Link>
          </li>

          <li 
            onClick={() => handleClickQuestion(4)}
            className="dark-blue"
          >
            <Link>
              <span><FaIcons.FaSquare /></span>
              <p>O valor dos projetos colaborativos para a globalização.</p>
            </Link>
          </li>
        </Questions>
      </Contexto>
    </Container>
  );
}

export default Exercicio;
