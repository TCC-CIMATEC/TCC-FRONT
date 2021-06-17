import Button from "../../../components/Button";
import Container from "../../Main/Home/styles";
import { Wrapper } from "../../Main/Sobre/styles";

import CheckImg from '../../../assets/circle_check.svg';
import { Row } from "../../../components/Form";
import { Content } from "./styles";
import { useHistory } from "react-router-dom";

function ConfirmaCadastro() {
    const history = useHistory();
    function handleSubmit(){
        history.push('login')
    }
    return (
        <Container>
            <Wrapper style={{ width: "50%" }}>
                <Content>
                    <img src={CheckImg} alt="Ícone check" />
                    <Row>
                        <p>
                            Conta criada com sucesso! Seja bem-vindo(a) ao nosso espaço de aprendizado! Confira seu e-mail para mais detalhes!
                        </p>
                    </Row>
                    <Button 
                        title="OK" 
                        background="#659157"
                        onClick={() => handleSubmit()}
                    />
                </Content>
            </Wrapper>
        </Container>
    );
}

export default ConfirmaCadastro;