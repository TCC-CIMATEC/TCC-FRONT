import { useState } from 'react';
import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import PlayImg from '../../../assets/play_circle_outline.png'
import Dashboard from '../../../components/Dashboard';
import { useAuth } from '../../../hooks/AuthContext';
import api from '../../../services/api';
import { Container, Content, ModuloContent, Lista } from './styles';

interface ModuleProps {
  id: number;
  titulo: string;
}

interface PlayerProps {
  nivel: number;
  pontuacao: number;
  faselogicaprogramacao: number;
  fasepensamentocomputacional: number;
}

export function Modulos() {
  const { state } = useLocation();
  const { user } = useAuth();
  const [modules, setModules] = useState<ModuleProps[]>([]);
  const [player, setPlayer] = useState<PlayerProps>();

  useEffect(() => {
    async function loadModules() {
      const response = await api.get(`conteudo/?modulo=${state}`)
      setModules(response.data);
    }
    async function loadPlayer() {
      const response = await api.get(`jogador/?id=${user.id}`)
      setPlayer(response.data[0]);
    }
    loadPlayer();
    loadModules();
  }, [])

  return (
    <Container className="container-modulo">
      <Dashboard>
        <Content className="content-modulo">
          <ModuloContent>
            <Lista>
              {modules.length > 0 ? (
                modules.map((module, index) => (
                  <Link style={{ textDecoration: "none" }} to={{
                    pathname: '/trilha',
                    state: state === 'P' ? index + 1 : index + 2
                  }}>
                    <li>
                      <span>
                        <img src="https://picsum.photos/500" alt="" />
                      </span>
                      {module.titulo}
                      <span>
                        <img src={PlayImg} alt="Ícone bloqueado" />
                      </span>
                    </li>
                  </Link>
                ))
              ) : (
                <p>Carregando módulos</p>
              )}
            </Lista>
          </ModuloContent>
        </Content>
      </Dashboard>
    </Container>
  );
}

export default Modulos;
