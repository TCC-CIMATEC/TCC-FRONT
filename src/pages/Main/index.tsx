import Button from "../../components/Button";
import { Container, Banner, BannerContent, BannerImage } from "./styles";

function Main() {
    return (
        <Container>
            <Banner>
                <BannerContent>
                    <h1>Nome do Projeto</h1>
                    <p>Liquorice dessert cake ice cream gummi bears lemon drops croissant ice cream. Soufflé tootsie roll caramels jelly beans caramels cake.</p>
                    <Button title="Começar" background="#01161E" />
                </BannerContent>
                <BannerImage>
                    <img src="https://picsum.photos/500" alt="Logo Projeto" />
                </BannerImage>
            </Banner>
        </Container>
    );
}

export default Main;