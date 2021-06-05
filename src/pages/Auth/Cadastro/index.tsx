import Button, { CloseButton } from "../../../components/Button";
import { Form, Row } from "../../../components/Form";
import Container from "../../Main/Home/styles";
import { Wrapper } from "../../Main/Sobre/styles";

export function Cadastro() {
    return (
        <Container style={{ height: "auto", padding: "8vh 0" }}>

            <Wrapper style={{ height: "auto" }}>
                <Form>
                    <h1>Cadastre-se!</h1>
                    <Row>
                        <p>
                            <label htmlFor="form-name">Digite aqui seu nome completo</label>
                            <input type="text" name="form-name" id="form-name" placeholder="Nome Completo" />
                        </p>
                    </Row>
                    <Row>
                        <p>
                            <label htmlFor="form-phone">Digite aqui seu Telefone</label>
                            <input type="text" name="form-phone" id="form-phone" placeholder="(99) 99123-4567" />
                        </p>
                        <p>
                            <label htmlFor="form-mail">Digite aqui seu E-mail</label>
                            <input type="text" name="form-mail" id="form-mail" placeholder="seuemail@exemplo.com" />
                        </p>
                    </Row>
                    <Row>
                        <p>
                            <label htmlFor="form-password">Digite aqui sua senha</label>
                            <input type="password" name="form-password" id="form-password" placeholder="senha" />
                        </p>
                        <p>
                            <label htmlFor="form-confirm-password">Sua senha novamente</label>
                            <input type="password" name="form-confirm-password" id="form-confirm-password" placeholder="confirme sua senha" />
                        </p>
                    </Row>
                    <Row>
                        <span>
                            <input type="radio" name="form-tipo" id="form-aluno" checked />
                            <label htmlFor="form-aluno">Sou aluno(a)</label>
                        </span>
                        <span>
                            <input type="radio" name="form-tipo" id="form-professor" />
                            <label htmlFor="form-professor">Sou professor(a)</label>
                        </span>
                    </Row>
                    <p className="flex" style={{ textAlign: "center" }}>
                        <Button title="Cancelar" background="#D7263D" />
                        <Button title="Enviar" background="#659157" />
                    </p>
                </Form>
            </Wrapper>
        </Container>

    );
}

export default Cadastro;