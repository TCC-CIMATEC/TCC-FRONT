import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../components/Button';
import CardHorizontal from '../../../components/Card-horizontal';
import { CardList } from '../../../components/Card-horizontal-professor/styles';
import Dashboard from '../../../components/Dashboard';
import { useAuth } from '../../../hooks/AuthContext';
import api from '../../../services/api';
import { Container, Content, TurmaContent } from './styles';

interface Classes {
  id: number;
  nome: string;
  professor: {};
  codigoTurma: string;
  alunos: []
}


export function Turmas() {
  const {user} = useAuth();
  const [classes, setClasses] = useState<Classes[]>([]);

  useEffect(() => {
    async function getClasses(){
      await api.get(`turma/?id=&professor__id=&alunos__user__id=${user.id}`).then((response) => {
        setClasses(response.data);
      });
    }

    getClasses();
  }, [])
  
  return (
    <Container className="container-turma">
      <Dashboard>
        <Content className="content-turma">
          <h1>Turmas</h1>
          {classes.length > 0 ? (
          <TurmaContent>
            <CardList>
              {
                classes.map(classes => (
                  <CardHorizontal img={"https://picsum.photos/300/200"} title={classes.nome} description={classes.codigoTurma} />
                ))
              }
            </CardList>
          </TurmaContent>
          ): (
            <p>Você ainda não possui nenhuma turma, entre em alguma para começar.</p>
          )}
          <div className="btn-content">
            <Link to="/nova-turma-aluno">
              <Button 
                title="Entrar em nova turma" 
                background="#1C7293" 
              />
            </Link>
          </div>
        </Content>
      </Dashboard>
    </Container>
  );
}

export default Turmas;
