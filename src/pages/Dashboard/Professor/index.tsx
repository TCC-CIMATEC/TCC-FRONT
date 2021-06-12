import { Container, Content, ProfessorContent } from './styles';
import CardHorizontalProfessor from '../../../components/Card-horizontal-professor';
import DashboardProfessor from '../../../components/Dashboard';
import { useState, useEffect } from 'react';
import api from '../../../services/api';
import Button from '../../../components/Button';
import { Link } from 'react-router-dom';
import { CardList } from '../../../components/Card-horizontal-professor/styles';

interface Classes {
  id: number;
  nome: string;
  professor: {};
  codigoTurma: string;
  alunos: []
}

export function Professor() {
  const [classes, setClasses] = useState<Classes[]>([]);

  useEffect(() => {
    async function getClasses(){
      await api.get('turma/').then((response) => {
        setClasses(response.data);
      });
    }

    getClasses();
  }, [])
  
  return (
    <Container className="container-aluno">
      <DashboardProfessor>
        <Content className="content-aluno">
          <h1>Turmas</h1>
          <ProfessorContent>
              {classes && (
                <CardList>
                  {
                    classes.map(classes => (
                      <CardHorizontalProfessor img={"https://picsum.photos/300/200"} title={classes.nome} description={classes.codigoTurma} />
                    ))
                  }
                </CardList>
              )}
            </ProfessorContent>
          <Link to="/nova-turma-professor" className="new-class">
            <Button title="Nova turma" background="#659157" />
          </Link>
        </Content>
      </DashboardProfessor>
    </Container>
  );
}

export default Professor;
