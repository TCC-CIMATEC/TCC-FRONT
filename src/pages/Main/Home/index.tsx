
import Button from "../../../components/Button";

import { Link } from 'react-router-dom';
import { Container, Banner, BannerContent, BannerImage } from "./styles";
import LogoImg from '../../../assets/CodeWings.svg';

function Home() {
    return (
        <Container>
            <Banner>
                <BannerContent>
                    <h1>Code Wings</h1>
                    <p>Nas asas do conhecimento!</p>
                    <Link className="link" to="/login">
                        <Button title="Começar" background="#01161E" />
                    </Link>
                </BannerContent>
                <BannerImage>
                    <img src={LogoImg} alt="Logo Projeto" />
                </BannerImage>
            </Banner>
        </Container>
    );
}

export default Home;