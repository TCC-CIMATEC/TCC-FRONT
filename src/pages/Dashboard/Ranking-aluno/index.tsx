import Dashboard from '../../../components/Dashboard';
import { Container, Content, ModuloContent, Lista } from './styles';
import RankingImg from '../../../assets/ranking.png';
import * as FaIcons from "react-icons/fa";
import Button from '../../../components/Button';
import { useEffect, useState } from 'react';
import api from '../../../services/api';
import { Link } from 'react-router-dom';

interface User {
  id: number;
  first_name: string;
}

interface RankingProps {
  user: User;
}

export function RankingAlunos() {

  const [ranking, setRanking] = useState<RankingProps[]>([]);

  useEffect(() => {
    async function loadRanking(){
      await api.get('jogador/ranking/').then((response) => {
        setRanking(response.data)
      })
    }

    loadRanking();
  }, [])
  return (
    <Container className="container-modulo">
      <Dashboard>
        <Content className="content-modulo">
          <ModuloContent>
            <h1>Ranking</h1>
            <img src={RankingImg} alt="Ícone de ranking" />
            <p className="ranking-atual">Você está no 1º lugar</p>
            <Lista>
              {ranking && (
                ranking.map((rank, index) => (
                  <li>
                  <span>
                    <FaIcons.FaTrophy style={{ color: "#01161E" }} />
                  </span>
                    {rank.user.first_name}
                  <span>
                    {index + 1}º
                  </span>
                </li>
                ))
              )}
            </Lista>
          </ModuloContent>
          <div className="btn-content">
            <Link to="/aluno">
              <Button title="Voltar" background="#D7263D" />
            </Link>
          </div>
        </Content>
      </Dashboard>
    </Container>
  );
}

export default RankingAlunos;
