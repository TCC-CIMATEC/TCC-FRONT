import Container from "../Main/styles";
import CloseImage from '../../img/close_big.svg';
import { CloseButton, SobreContent, Wrapper } from "./styles";

function Sobre() {
    return (
        <Container>
            <Wrapper>
                <CloseButton>
                    <img src={CloseImage} alt="Ícone fechar tela" />
                </CloseButton>
                <SobreContent>
                    <h1>Sobre o projeto</h1>
                    <p>Liquorice dessert cake ice cream gummi bears lemon drops croissant ice cream. Soufflé tootsie roll caramels jelly beans caramels cake. Marshmallow chupa chups cake marzipan croissant topping tiramisu cotton candy sweet roll. Icing croissant chocolate marshmallow chocolate. Halvah marshmallow chocolate bar danish. Oat cake cheesecake muffin caramels candy canes caramels gingerbread chocolate. Sesame snaps biscuit topping cupcake.</p>
                </SobreContent>
                <img src="https://picsum.photos/500" alt="Imagem do grupo" />
            </Wrapper>
        </Container>
    );
}

export default Sobre;