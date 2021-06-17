import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Button from "../../../components/Button";
import { Form, Row } from "../../../components/Form";
import api from '../../../services/api';
import Container from "../../Main/Home/styles";
import { Circle, Wrapper } from "../../Main/Sobre/styles";
import { FormFooter, RadioBox, Radios } from './styles';
import LogoImg from '../../../assets/CodeWingsWhite.svg';


export function Cadastro() {
    const history = useHistory();
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [passwordConfirmation, setPasswordConfirmation] = useState<string>('');
    const [isStudent, setIsStudent] = useState(true);
    const [isTeacher, setIsTeacher] = useState(false);
    const [isMale, setIsMale] = useState(true);
    const [isFemale, setIsFemale] = useState(false);
    const [isOther, setIsOther] = useState(false);

    async function handleRegistration() {
        if (!name || !email || !phone || !password || !passwordConfirmation) {
            alert('Preencha todos os campos')
            return;
        }

        if (password !== passwordConfirmation) {
            alert('Senhas precisam ser identicas');
            return;
        }

        let categoria = 'A'

        if (isTeacher) {
            categoria = 'P'
        }

        let genero = 'M'

        if (isFemale) {
            genero = 'F'
        }

        if (isOther) {
            genero = 'O'
        }

        const player = {
            email,
            password,
            phone,
            name,
            genero,
            categoria,
        }

        await api.post('jogador/registration/', player)
            .then((response) => {
                console.log(response.data, 'resposta');
                history.push('confirma-cadastro')
            }).catch((err) => {
                console.log(err.response.data.email)
                alert(`Erro: ${err.response.data.email ? 'E-mail já cadastrado': err.response.data}`)
            })

    }

    return (
        <Container style={{ height: "auto", padding: "8vh 0" }}>

            <Wrapper style={{ height: "auto" }}>
                <Form onSubmit={e => e.preventDefault()}>
                    <Circle>
                        <img src={LogoImg} alt="Logo Code Wings" />
                    </Circle>
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
                        <Radios>
                            <RadioBox
                                type="button"
                                onClick={() => {
                                    setIsStudent(true);
                                    setIsTeacher(false);
                                }}
                                isActive={isStudent}
                            >
                                <span>Aluno</span>
                            </RadioBox>
                            <RadioBox
                                type="button"
                                onClick={() => {
                                    setIsTeacher(true);
                                    setIsStudent(false);
                                }}
                                isActive={isTeacher}
                            >
                                <span>Professor</span>
                            </RadioBox>
                        </Radios>
                    </Row>
                    <Row>
                        <Radios>
                            <RadioBox
                                type="button"
                                onClick={() => {
                                    setIsMale(true);
                                    setIsFemale(false);
                                    setIsOther(false);
                                }}
                                isActive={isMale}
                            >
                                <span>Masculino</span>
                            </RadioBox>
                            <RadioBox
                                type="button"
                                onClick={() => {
                                    setIsMale(false);
                                    setIsFemale(true);
                                    setIsOther(false);
                                }}
                                isActive={isFemale}
                            >
                                <span>Feminino</span>
                            </RadioBox>
                            <RadioBox
                                type="button"
                                onClick={() => {
                                    setIsMale(false);
                                    setIsFemale(false);
                                    setIsOther(true);
                                }}
                                isActive={isOther}
                            >
                                <span>Outro</span>
                            </RadioBox>
                        </Radios>
                    </Row>
                    <FormFooter>
                        <Link to="/login">
                            <Button title="Voltar" background="#D7263D" />
                        </Link>
                        <Button
                            title="Cadastrar"
                            background="#659157"
                            onClick={() => handleRegistration()}
                        />
                    </FormFooter>
                </Form>
            </Wrapper>
        </Container>
    );
}

export default Cadastro;