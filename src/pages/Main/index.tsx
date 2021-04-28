import Button from "../../components/Button";
import SideMenu from "../../components/SideMenu";
import { Link } from 'react-router-dom';
import { Container, Banner, BannerContent, BannerImage } from "./styles";

function Main() {
    return (
        <Container>
            <Banner>
                <BannerContent>
                    <h1>Nome do Projeto</h1>
                    <p>Liquorice dessert cake ice cream gummi bears lemon drops croissant ice cream. Soufflé tootsie roll caramels jelly beans caramels cake.</p>
                    <Link to="/login">
                        <Button title="Começar" background="#01161E" />
                    </Link>
                </BannerContent>
                <BannerImage>
                    <img src="https://picsum.photos/500" alt="Logo Projeto" />
                </BannerImage>
            </Banner>
        </Container>
    );
}

export default Main;