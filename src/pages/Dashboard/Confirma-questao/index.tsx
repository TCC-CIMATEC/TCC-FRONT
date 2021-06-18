import Button from "../../../components/Button";
import Container from "../../Main/Home/styles";
import { Wrapper } from "../../Main/Sobre/styles";

import CheckImg from '../../../assets/circle_check.svg';
import { Row } from "../../../components/Form";
import { Content } from "./styles";
import { useHistory } from "react-router-dom";

function ConfirmaQuestao() {
    const history = useHistory();
    function handleSubmit(){
        history.push('aluno')
    }
    return (
        <Container>
            <Wrapper style={{ width: "50%" }}>
                <Content>
                    <img src={CheckImg} alt="Ícone check" />
                    <Row>
                        <p>
                            Você acertou! Parabéns, você está evoluindo, continue assim!
                        </p>
                    </Row>
                    <Button 
                        title="OBA!" 
                        background="#659157"
                        onClick={() => handleSubmit()}
                    />
                </Content>
            </Wrapper>
        </Container>
    );
}

export default ConfirmaQuestao;