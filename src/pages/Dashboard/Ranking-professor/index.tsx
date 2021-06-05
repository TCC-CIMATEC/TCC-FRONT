import { ButtonDashBoard } from '../../../components/Button';
import { Container, Content, ModuloContent, Lista, RankingContent } from './styles';
import RankingImg from '../../../assets/ranking.png';
import * as FaIcons from "react-icons/fa";
import DashboardProfessor from '../../../components/DashboardProfessor';


interface ItemProps {
  title: string;
}

function Item({ title }: ItemProps) {
  return (
    <li>
      <span>
        <FaIcons.FaTrophy style={{ color: "#065A82" }} />
      </span>
      {title}
      <span>
        1º
      </span>
    </li>
  );
}

interface ItemListaProps {
  title: string;
  img: string
}

function ItemLista({ title, img }: ItemListaProps) {
  return (
    <li>
      <span>
        <img src={img} alt="Ícone Aluno" />
      </span>
      {title}
      <span>
        <FaIcons.FaPlayCircle style={{ color: "#065A82" }} />
      </span>
    </li>
  );
}

export function RankingProfessor() {
  let item = [];
  let lista = [];
  for (let i = 0; i < 10; i++) {
    item.push(<Item title={"Fulaninha"} />);
    lista.push(<ItemLista title={"Fulaninha"} img={"https://picsum.photos/500"} />);
  }
  return (
    <Container className="container-modulo">
      <DashboardProfessor>
        <Content className="content-modulo">
          <RankingContent>
            <ModuloContent>
              <h1>Ranking</h1>
              <img src={RankingImg} alt="Ícone de ranking" />
              <Lista>
                {item}
              </Lista>
            </ModuloContent>
            <ModuloContent>
              <h1>Alunos</h1>
              <Lista className="alunos">
                {lista}
              </Lista>
            </ModuloContent>
          </RankingContent>
          <div className="btn-content">
            <ButtonDashBoard title="Voltar" background="#D7263D" />
            <ButtonDashBoard title="Criar turma" background="#659157" />
          </div>
        </Content>
      </DashboardProfessor>
    </Container>
  );
}

export default RankingProfessor;
