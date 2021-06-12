import Button from "../../../components/Button";
import Container from "../../Main/Home/styles";
import { Wrapper } from "../../Main/Sobre/styles";

import CheckImg from '../../../assets/circle_check.svg';
import { Row } from "../../../components/Form";
import { Content } from "../Confirma-cadastro/styles";

function ConfirmaSenha() {
    return (
        <Container>
            <Wrapper style={{ width: "50%" }}>
                <Content>
                    <img src={CheckImg} alt="Ícone check" />
                    <Row>
                        <p>
                            Email de recuperação de senha enviado com sucesso! confira seu e-mail e siga as intruções para a troca de senha!
                        </p>
                    </Row>
                    <Button title="Enviar" background="#659157" />
                </Content>
            </Wrapper>
        </Container>
    );
}

export default ConfirmaSenha;