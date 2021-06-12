import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import Button, { CloseButton } from "../../../components/Button";
import { Form, Row } from "../../../components/Form";
import api from '../../../services/api';
import Container from "../../Main/Home/styles";
import { Wrapper } from "../../Main/Sobre/styles";


export function Cadastro() {
    const history = useHistory();
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [passwordConfirmation, setPasswordConfirmation] = useState<string>('');
    const [role, setRole] = useState<'aluno' | 'professor'>('aluno');
    const [gender, setGender] = useState<'masculino' | 'feminino' | 'outro'>('masculino');

    async function handleRegistration(){
        if(!name || !email || !phone || !password || !passwordConfirmation){
            alert('Preencha todos os campos')
            return;
        }

        if(password !== passwordConfirmation){
            alert('Senhas precisam ser identicas');
            return;
        }

        const player = {
            email,
            password,
            phone,
            name,
            genero: 'M',
            categoria: role === 'professor' ? 'P' : 'A'
        }

        await api.post('jogador/registration/', player)
        .then((response) => {
            console.log(response.data, 'resposta');
            history.push('confirma-cadastro')
        }).catch((err) => {
            alert(`Erro: ${err.response.data}`)
        })

    }

    return (
        <Container style={{ height: "auto", padding: "8vh 0" }}>

            <Wrapper style={{ height: "auto" }}>
                <Form onSubmit={e => e.preventDefault()}>
                    <h1>Cadastre-se!</h1>
                    <Row>
                        <p>
                            <label htmlFor="form-name">Digite aqui seu nome completo</label>
                            <input 
                                type="text" 
                                name="form-name" 
                                id="form-name" 
                                placeholder="Nome Completo"
                                onChange={(e) => setName(e.currentTarget.value)} 
                            />
                        </p>
                    </Row>
                    <Row>
                        <p>
                            <label htmlFor="form-phone">Digite aqui seu Telefone</label>
                            <input 
                                type="text" 
                                name="form-phone" 
                                id="form-phone" 
                                placeholder="(99) 99123-4567"
                                onChange={(e) => setPhone(e.currentTarget.value)}  
                            />
                        </p>
                        <p>
                            <label htmlFor="form-mail">Digite aqui seu E-mail</label>
                            <input 
                                type="text" 
                                name="form-mail" 
                                id="form-mail" 
                                placeholder="seuemail@exemplo.com"
                                onChange={(e) => setEmail(e.currentTarget.value)}  
                            />
                        </p>
                    </Row>
                    <Row>
                        <p>
                            <label htmlFor="form-password">Digite aqui sua senha</label>
                            <input 
                                type="password" 
                                name="form-password" 
                                id="form-password" 
                                placeholder="senha"
                                onChange={(e) => setPassword(e.currentTarget.value)}  
                            />
                        </p>
                        <p>
                            <label htmlFor="form-confirm-password">Sua senha novamente</label>
                            <input 
                                type="password" 
                                name="form-confirm-password" 
                                id="form-confirm-password" 
                                placeholder="confirme sua senha"
                                onChange={(e) => setPasswordConfirmation(e.currentTarget.value)}  
                            />
                        </p>
                    </Row>
                    <Row>
                        <span>
                            <input 
                                type="radio" 
                                name="form-tipo" 
                                id="form-aluno"
                                checked={role === 'aluno'} 
                                value="aluno"
                                onClick={() => setRole('aluno')}
                            />
                            <label htmlFor="form-aluno">Sou aluno(a)</label>
                        </span>
                        <span>
                            <input 
                                type="radio" 
                                name="form-tipo" 
                                id="form-professor" 
                                checked={role === 'professor'} 
                                value="professor"
                                onClick={() => setRole('professor')}
                            />
                            <label htmlFor="form-professor">Sou professor(a)</label>
                        </span>
                    </Row>
                    <p className="flex" style={{ textAlign: "center" }}>
                        <Button title="Cancelar" background="#D7263D" />
                        <Button 
                            title="Enviar" 
                            background="#659157"
                            onClick={() => handleRegistration()} 
                        />
                    </p>
                </Form>
            </Wrapper>
        </Container>
    );
}

export default Cadastro;