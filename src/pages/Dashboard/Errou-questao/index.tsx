import Button from "../../../components/Button";
import Container from "../../Main/Home/styles";
import { Wrapper } from "../../Main/Sobre/styles";

import ErrorImg from '../../../assets/error.png';
import { Row } from "../../../components/Form";
import { Content } from "./styles";
import { useHistory } from "react-router-dom";

function ErrouQuestao() {
    const history = useHistory();
    function handleSubmit(){
        history.push('aluno')
    }
    return (
        <Container>
            <Wrapper style={{ width: "50%" }}>
                <Content>
                    <img src={ErrorImg} alt="Ícone check" />
                    <Row>
                        <p>
                            Você errou! Não fique triste, você pode tentar novamente. Nunca desista!
                        </p>
                    </Row>
                    <Button 
                        title="Não vou desistir" 
                        background="#D7263D"
                        onClick={() => handleSubmit()}
                    />
                </Content>
            </Wrapper>
        </Container>
    );
}

export default ErrouQuestao;