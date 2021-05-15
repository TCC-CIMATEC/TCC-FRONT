import { ButtonDashBoard } from '../../../components/Button';
import Dashboard from '../../../components/Dashboard';
import { Container, Content, ModuloContent, Lista } from './styles';
import RankingImg from '../../../assets/ranking.png';
import * as FaIcons from "react-icons/fa";

interface ItemProps {
  title: string;
}

function Item({ title }: ItemProps) {
  return (
    <li>
      <span>
        <FaIcons.FaTrophy style={{ color: "#01161E" }} />
      </span>
      {title}
      <span>
        1º
      </span>
    </li>
  );
}

export function RankingAlunos() {
  let item = [];
  for (let i = 0; i < 5; i++) {
    item.push(<Item title={"Fulaninha"} />);
  }
  return (
    <Container className="container-modulo">
      <Dashboard>
        <Content className="content-modulo">
          <ModuloContent>
            <h1>Ranking</h1>
            <img src={RankingImg} alt="Ícone de ranking" />
            <Lista>
              {item}
            </Lista>
          </ModuloContent>
          <div className="btn-content">
            <ButtonDashBoard title="Voltar" background="#D7263D" />
          </div>
        </Content>
      </Dashboard>
    </Container>
  );
}

export default RankingAlunos;
