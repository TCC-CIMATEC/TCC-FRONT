import Container from "../Main/styles";
import { Wrapper } from "../Sobre/styles";
import Button, { CloseButton } from "../../components/Button";
import { Form, Row } from "../../components/Form";

function FaleConosco() {
    return (
        <Container>
            <Wrapper>
                <CloseButton />
                <Form>
                    <h1>Fale Conosco</h1>
                    <Row>
                        <p>
                            <label htmlFor="form-name">Digite aqui o seu nome</label>
                            <input type="text" name="form-name" id="form-name" placeholder="Nome Completo" />
                        </p>
                    </Row>
                    <Row>
                        <p>
                            <label htmlFor="form-mail">Digite aqui o seu e-mail</label>
                            <input type="text" name="form-mail" id="form-mail" placeholder="seuemail@exemplo.com" />
                        </p>
                    </Row>
                    <Row>
                        <p>
                            <label htmlFor="form-suggestion">Digite aqui sua mensagem</label>
                            <textarea name="form-suggestion" id="form-suggestion" placeholder="Sua mensagem"></textarea>
                        </p>
                    </Row>
                    <Row>
                        <p className="flex">
                            <Button title="Cancelar" background="#D7263D" backgroundHover="#961a2a" />
                            <Button title="Enviar" background="#659157" backgroundHover="#46653c" />
                        </p>
                    </Row>
                </Form>
            </Wrapper>
        </Container>
    );
}

export default FaleConosco;