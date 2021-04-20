import Container from "../Main/styles";
import CloseImage from '../../img/close_big.svg';
import { CloseButton, Wrapper } from "../Sobre/styles";
import styled from "styled-components";
import Button from "../../components/Button";

export const FormContato = styled.form`
    width: 30vw;
    p{
        margin: 5vh 0;
        position: relative;
        width: 100%;
        &:last-child{
            display: flex;
            justify-content: center;
            margin: 0;
        }
        label{
            bottom: -2.5vh;
            font-size: 0.8rem;
            position: absolute;
        }
        input, textarea{
            background-color: #9EB3C2;
            border: none;
            height: 6vh;
            width: 100%;
        }
        textarea{
            height: 12vh;
        }
        button{
            margin: 0;
            width: 40%;
        }
    }
`;

function FaleConosco() {
    return (
        <Container>
            <Wrapper>
                <CloseButton>
                    <img src={CloseImage} alt="Ícone fechar tela" />
                </CloseButton>
                <FormContato>
                    <h1>Fale Conosco</h1>
                    <p>
                        <label htmlFor="form-name">Digite aqui o seu nome</label>
                        <input type="text" name="form-name" id="form-name" placeholder="Nome Completo" />
                    </p>
                    <p>
                        <label htmlFor="form-mail">Digite aqui o seu e-mail</label>
                        <input type="text" name="form-mail" id="form-mail" placeholder="seuemail@exemplo.com" />
                    </p>
                    <p>
                        <label htmlFor="form-suggestion">Digite aqui sua mensagem</label>
                        <textarea name="form-suggestion" id="form-suggestion" placeholder="Sua mensagem"></textarea>
                    </p>
                    <p>
                        <Button title="Cancelar" background="#D7263D" />
                        <Button title="Enviar" background="#659157" />
                    </p>
                </FormContato>
            </Wrapper>
        </Container>
    );
}

export default FaleConosco;