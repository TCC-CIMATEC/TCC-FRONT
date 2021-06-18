import { useState } from "react";
import { useEffect } from "react";
import * as FaIcons from "react-icons/fa";
import { useHistory, useLocation } from "react-router-dom";
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

interface QuestionProps {
  id: number;
  url_img: string;
  opcao1: {
    descricao: string;
    correta: boolean;
  },
  opcao2: {
    descricao: string;
    correta: boolean;
  },
  opcao3: {
    descricao: string;
    correta: boolean;
  },
  opcao4: {
    descricao: string;
    correta: boolean;
  }
}

interface PlayerProps {
  nivel: number;
  pontuacao: number;
  fasepensamentocomputacional: number;
  faselogicaprogramacao: number;
}

function Exercicio() {
  const { state } = useLocation<QuestionProps>();
  const {user} = useAuth();
  const history = useHistory();
  const [question, setQuestion] = useState<QuestionProps>();
  const [isLoading, setIsLoading] = useState(true);
  const [correctQuestion, setCorrectQuestion] = useState<number>();
  const [player, setPlayer] = useState<PlayerProps>();

  useEffect(() => {
    async function loadQuestion(){
      const response = await api.get(`questao/?id=${state.id}`)
      setQuestion(response.data[0]);
      if (response.data[0].opcao1.correta === true){
        setCorrectQuestion(1)
      } else if(response.data[0].opcao2.correta === true){
        setCorrectQuestion(2)
      } else if(response.data[0].opcao3.correta === true){
        setCorrectQuestion(3)
      } else if(response.data[0].opcao4.correta === true){
        setCorrectQuestion(4);
      }
    }
    async function loadPlayer(){
      const response = await api.get(`jogador/?id=${user.id}`)
      setPlayer(response.data[0]);
    }
    loadQuestion();
    loadPlayer();
    setIsLoading(false);
  }, [])

  async function handleClickQuestion(question: number){
    if(question === correctQuestion){
      try {
        const newLevel = {
          aluno: user.email,
          nivel: player!.nivel + 1,
          pontuacao: player!.pontuacao + 10,
          faselogicaprogramacao: player!.faselogicaprogramacao + 1,
        }
        console.log(player!.pontuacao);
        await api.put('jogador/update/', newLevel);
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
      {isLoading ? (
        <p>Carregando conteúdo</p>
      ) : (
        <>
          {question && (
            <Contexto>
        <Title>Atividade</Title>
        <Image src={`${question?.url_img}`} />
        <Questions>
          <li 
            onClick={() => handleClickQuestion(1)}
            className="blue"
          >
            <Link>
              <span><FaIcons.FaCircle /></span>
              <p>{question?.opcao1.descricao}</p>
            </Link>
          </li>

          <li 
            onClick={() => handleClickQuestion(2)}
            className="green"
          >
            <Link>
              <span><FaIcons.FaHeart /></span>
              <p>{question?.opcao2.descricao}</p>
            </Link>
          </li>

          <li 
            onClick={() => handleClickQuestion(3)}
            className="red"
          >
            <Link>
              <span><FaIcons.FaMoon /></span>
              <p>{question?.opcao3.descricao}</p>
            </Link>
          </li>

          <li 
            onClick={() => handleClickQuestion(4)}
            className="dark-blue"
          >
            <Link>
              <span><FaIcons.FaSquare /></span>
              <p>{question?.opcao4.descricao}</p>
            </Link>
          </li>
        </Questions>
      </Contexto>
          )}
        </>
      )}
    </Container>
  );
}

export default Exercicio;
