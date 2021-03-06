import Button from "../../../components/Button";
import { Form, Row } from "../../../components/Form";
import Container from "../../Main/Home/styles";
import { Circle, Wrapper } from "../../Main/Sobre/styles";
import LogoImg from '../../../assets/CodeWingsWhite.svg';

function EsqueciSenha() {
    return (
        <Container>
            <Wrapper>
                <Form>
                    <Circle>
                        <img className="Logo" src={LogoImg} alt="Logo Code Wings" />
                    </Circle>
                    <h1>Esqueceu sua senha?</h1>
                    <Row>
                        <p>
                            <label htmlFor="form-login">Digite aqui seu e-mail</label>
                            <input type="text" name="form-mail" id="form-mail" placeholder="seumail@exemplo.com" />
                        </p>
                    </Row>
                    <Row>
                        <p>
                            <label htmlFor="form-login">Digite aqui seu e-mail novamente</label>
                            <input type="text" name="form-confirm-mail" id="form-confirm-mail" placeholder="seumail@exemplo.com" />
                        </p>
                    </Row>
                    <Row>
                        <p className="flex" style={{ textAlign: "center" }}>
                            <Button title="Cancelar" background="#D7263D" />
                            <Button title="Enviar" background="#659157" />
                        </p>
                    </Row>
                    <Row>
                        <p className="flex">
                            <a href="/cadastro">Cadastre-se</a>
                        </p>
                    </Row>
                </Form>
            </Wrapper>
        </Container>
    );
}

export default EsqueciSenha;