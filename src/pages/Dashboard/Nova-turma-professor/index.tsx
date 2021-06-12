import { Container, Content, ModuloContent, Span } from './styles';
import { Wrapper } from '../../Main/Sobre/styles';
import { Form, Row } from '../../../components/Form';
import DashboardProfessor from '../../../components/Dashboard';
import Button from '../../../components/Button';
import { useState } from 'react';
import Select from '../../../components/Select';
import api from '../../../services/api';
import { useAuth } from '../../../hooks/AuthContext';
import { useHistory } from 'react-router';

export function NovaTurmaProfessor() {
  const history = useHistory();
  const {user} = useAuth();
  const [className, setClassName] = useState<string>()
  const [classCode, setClassCode] = useState<string>()
  const [classTurn, setclassTurn] = useState<string>('Matutino');

  const setSelectClassTurn = (value: string) => {
    setclassTurn(value);
  };


  async function handleCreateNewClass(){
    if(!className || !classCode){
      alert('Preenche todos os campos');
      return;
    }
    let turno = 'M';

    if(classTurn === 'Vespertino'){
      turno = 'V';
    } else if (classTurn === 'Noturno'){
      turno = 'N';
    } else if (classTurn === 'Integral'){
      turno = 'I'
    }

    const newClass = {
      nome: className,
      turno,
      professor: user.email,
      codigoTurma: classCode,
    }

    await api.post('turma/registration/', newClass)
    .then((response) => {
      history.push('professor')
    }).catch((err) => {
        alert(`Erro: ${err.response.data}`)
    })

  }

  return (
    <Container className="container-modulo">
      <DashboardProfessor>
        <Content className="content-modulo">
          <ModuloContent>
            <Wrapper>
              <Form onSubmit={e => e.preventDefault()}>
                <h1>Nova Turma</h1>
                <Row>
                  <p>
                    <label htmlFor="form-name">Digite aqui o nome da turma</label>
                    <input 
                      type="text" 
                      name="form-name" id="form-name" 
                      placeholder="Nome" 
                      onChange={(e) => setClassName(e.currentTarget.value)} 
                    />
                  </p>
                </Row>
                <Row>
                  <p>
                    <label htmlFor="form-description">Qual o turno da turma ?</label>
                    <Select 
                      options={['Matutino', 'Vespertino', 'Noturno', 'Integral']}
                      setSelectValue={setSelectClassTurn}
                    />
                  </p>
                </Row>
                <Row>
                  <p>
                    <label htmlFor="form-description">Digite o código da turma</label>
                    <input 
                      type="text" 
                      name="form-description" 
                      id="form-description" 
                      placeholder="Código" 
                      onChange={(e) => setClassCode(e.currentTarget.value)} 
                    />
                  </p>
                </Row>
                <Span>Compartilhe esse código com seus alunos!</Span>
                <Row>
                    <Button 
                      title="Voltar" 
                      background="#D7263D" 
                    />
                    <Button 
                      title="Criar Turma" 
                      background="#659157"
                      onClick={() => handleCreateNewClass()}
                    />
                </Row>
              </Form>
            </Wrapper>
          </ModuloContent>
        </Content>
      </DashboardProfessor>
    </Container>
  );
}

// 

export default NovaTurmaProfessor;
