import Button, { CloseButton } from "../../components/Button";
import Container from "../Main/styles";
import { Wrapper } from "../Sobre/styles";

import CheckImg from '../../img/circle_check.svg';
import { Row } from "../../components/Form";
import { Content } from "../Confirma-cadastro/styles";

function ConfirmaSenha() {
    return (
        <Container>
            <Wrapper style={{ width: "50%" }}>
                <CloseButton />
                <Content>
                    <img src={CheckImg} alt="Ícone check" />
                    <Row>
                        <p>
                            Email de recuperação de senha enviado com sucesso! confira seu e-mail e siga as intruções para a troca de senha!
                        </p>
                    </Row>
                    <Button title="Enviar" background="#659157" backgroundHover="#46653c" />
                </Content>
            </Wrapper>
        </Container>
    );
}

export default ConfirmaSenha;