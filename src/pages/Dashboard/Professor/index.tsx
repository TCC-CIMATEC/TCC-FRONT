import Dashboard from '../../../components/Dashboard';
import { Container, Content, ProfessorContent } from './styles';
import CardHorizontalProfessor from '../../../components/Card-horizontal-professor';
import { ButtonDashBoard } from '../../../components/Button';
import DashboardProfessor from '../../../components/Dashboard';
import { CardList } from '../../../components/Card-horizontal-professor/styles';
import { useState, useEffect } from 'react';
import api from '../../../services/api';

interface Classes {
  turma: {
    id: number;
    nome: string;
    professor: {};
    codigoTurma: string;
    alunos: []
  }
}

export function Professor() {
  const [classes, setClasses] = useState<Classes[]>([]);

  async function getClasses(){
    await api.get('turma/').then((response) => {
      setClasses(response.data);
    }
    );
  }

  useEffect(() => {
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
                  {classes.map(({turma}: Classes) => (
                <CardHorizontalProfessor img={"https://picsum.photos/300/200"} title={turma.nome} description={turma.codigoTurma} />
                ))}
              </CardList>
              )}
          </ProfessorContent>
          <div className="btn-content">
            <ButtonDashBoard title="Nova turma" background="#659157" />
          </div>
        </Content>
      </DashboardProfessor>
    </Container>
  );
}

export default Professor;
