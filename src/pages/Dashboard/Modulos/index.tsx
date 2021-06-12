import LockImg from '../../../assets/lock.png';
import Button from '../../../components/Button';
import Dashboard from '../../../components/Dashboard';
import { Container, Content, ModuloContent, Lista } from './styles';

interface ItemProps {
  icon: string;
  title: string;
}

function Item({ icon, title }: ItemProps) {
  return (
    <li>
      <span>
        <img src={icon} alt="" />
      </span>
      {title}
      <span>
        <img src={LockImg} alt="Ícone bloqueado" />
      </span>
    </li>
  );
}

export function Modulos() {
  let item = [];
  for (let i = 0; i < 9; i++) {
    item.push(<Item icon={"https://picsum.photos/500"} title={"Módulo I - Variáveis"} />);
  }
  return (
    <Container className="container-modulo">
      <Dashboard>
        <Content className="content-modulo">
          <ModuloContent>
            <Lista>
              {item}
            </Lista>
          </ModuloContent>
          <div className="btn-content">
            <Button title="Voltar" background="#D7263D" />
            <Button title="Resumo" background="#659157" />
          </div>
        </Content>
      </Dashboard>
    </Container>
  );
}

export default Modulos;
