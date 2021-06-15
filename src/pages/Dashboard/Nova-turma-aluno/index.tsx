import Dashboard from '../../../components/Dashboard';
import { Container, Content, ModuloContent, Lista } from './styles';
import { Wrapper } from '../../Main/Sobre/styles';
import { Form, Row } from '../../../components/Form';
import Button from '../../../components/Button';
import { useAuth } from '../../../hooks/AuthContext';
import { useState } from 'react';
import api from '../../../services/api';
import { Link, useHistory } from 'react-router-dom';

export function NovaTurmaAluno() {
  const {user} = useAuth();
  const history = useHistory();
  const [classCode, setClassCode] = useState<string>();

  async function handleSubmit(){
    if(!classCode){
      alert('Preencha o campo como código da turma.');
      return;
    }

    const newStudent = {
      codigoTurma: classCode,
      aluno: user.email
    }

    await api.put('turma/add-alunos/', newStudent)
    .then((response) => {
      history.push('aluno')
    }).catch((err) => {
        alert(err.response.data.user[0])
    })

  }

  return (
    <Container className="container-modulo">
      <Dashboard>
        <Content className="content-modulo">
          <ModuloContent>
            <Wrapper>
              <Form onSubmit={e => e.preventDefault()}>
                <h1>Nova Turma</h1>
                <Row>
                  <p>
                    <input 
                      type="text" 
                      name="form-codigo" 
                      id="form-codigo" 
                      placeholder="Código da Turma" 
                      onChange={(e) => setClassCode(e.currentTarget.value)} 
                    />
                  </p>
                </Row>
                <Row>
                    <Button 
                      title="Entrar" 
                      background="#659157" 
                      onClick={() => handleSubmit()}  
                    />
                </Row>
              </Form>
            </Wrapper>
          </ModuloContent>
          <Link to="/turmas" className="new-class">
            <Button title="Minhas turmas" background="#1C7293" />
          </Link>
        </Content>
      </Dashboard>
    </Container>
  );
}

export default NovaTurmaAluno;
