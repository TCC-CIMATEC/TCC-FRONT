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

export function AlterarSenha() {
  const history = useHistory();
  const {user} = useAuth();
  const [oldPassword, setOldPassword] = useState<string>()
  const [newPassword, setNewPassword] = useState<string>()
  const [confirmNewPassword, setConfirmNewPassword] = useState<string>('string');


  async function handleCreateNewClass(){
    if(!oldPassword || !newPassword || !confirmNewPassword){
      alert('Preencha todos os campos');
      return;
    }

    if(newPassword !== confirmNewPassword){
      alert('As senhas não são iguais.')
      return;
    }

    const newPasswordObject = {
      email: user.email,
      old_password: oldPassword,
      new_password: newPassword,
      password_confirmation: confirmNewPassword
    }

    await api.put('authenticate/user/update/', newPasswordObject)
    .then((response) => {
      alert('Senha alterada com sucesso.')
      history.push(user.categoria === 'A'  ? 'aluno' : 'professor')
    }).catch((err) => {
      console.log(err);
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
                <h1>Alterar Senha</h1>
                <Row>
                  <p>
                    <label htmlFor="form-name">Digite aqui sua senha antiga</label>
                    <input 
                      type="text" 
                      name="form-name" id="form-name" 
                      placeholder="Senha antiga" 
                      onChange={(e) => setOldPassword(e.currentTarget.value)} 
                    />
                  </p>
                </Row>
                <Row>
                  <p>
                    <label htmlFor="form-description">Digite sua nova senha</label>
                    <input 
                      type="text" 
                      name="form-name" id="form-name" 
                      placeholder="Nova senha" 
                      onChange={(e) => setNewPassword(e.currentTarget.value)} 
                    />
                  </p>
                </Row>
                <Row>
                  <p>
                    <label htmlFor="form-description">Digite sua nova senha novamente</label>
                    <input 
                      type="text" 
                      name="form-description" 
                      id="form-description" 
                      placeholder="Nova senha novamente" 
                      onChange={(e) => setConfirmNewPassword(e.currentTarget.value)} 
                    />
                  </p>
                </Row>
                <Row>
                    <Button 
                      title="Voltar" 
                      background="#D7263D" 
                    />
                    <Button 
                      title="Alterar senha" 
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

export default AlterarSenha;
