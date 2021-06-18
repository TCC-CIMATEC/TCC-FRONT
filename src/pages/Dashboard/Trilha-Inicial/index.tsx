import {
  Container,
  Contexto,
  Image,
  Title,
}
  from './styles';
import Button from "../../../components/Button";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../../services/api";

interface ContentParams {
  titulo: string;
  url_img: string;
  questao: {
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
}

function TrilhaInicial() {
  const { state } = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const [content, setContent] = useState<ContentParams>({} as ContentParams)

  useEffect(() => {
    async function loadContent() {
      const response = await api.get(`conteudo/?id=${state}`)
      setContent(response.data[0]);
      setIsLoading(false);
    }
    loadContent();
  }, [])
  return (
    <Container>
      {isLoading ? (
        <p>Carregando conteúdo</p>
      ) : (
        <>
          <Contexto>
            <Title>{content.titulo}</Title>
          </Contexto>

          <Image src={`${content.url_img}`} />

          <div className="btn-content">
            <Link
              to={{
                pathname: 'exercicio',
                state: content.questao
              }}
            >
              <Button title="Próximo" background="#659157" />
            </Link>
          </div>
        </>
      )}
    </Container>
  );
}

export default TrilhaInicial;
