import Button, { CloseButton } from "../../components/Button";
import Container from "../Main/styles";
import { Wrapper } from "../Sobre/styles";

import CheckImg from '../../img/circle_check.svg';
import { Row } from "../../components/Form";
import { Content } from "./styles";

function ConfirmaCadastro() {
    return (
        <Container>
            <Wrapper style={{ width: "50%" }}>
                <CloseButton />
                <Content>
                    <img src={CheckImg} alt="Ícone check" />
                    <Row>
                        <p>
                            Conta criada com sucesso! Seja bem-vindo(a) ao nosso espaço de aprendizado! Confira seu e-mail para mais detalhes!
                        </p>
                    </Row>
                    <Button title="Enviar" background="#659157" backgroundHover="#46653c" />
                </Content>
            </Wrapper>
        </Container>
    );
}

export default ConfirmaCadastro;