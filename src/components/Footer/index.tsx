import { WrapperFooter, About, Tcc, Contact } from "./styles";
import GithubImage from '../../img/github.svg';
import { Link } from "react-router-dom";
function Footer() {
    return (
        <WrapperFooter>
            <About>
                <li>
                    <Link to="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/sobre">
                        Sobre o projeto
                    </Link>
                </li>
                <li>
                    <Link to="/fale-conosco">
                        Fale conosco
                    </Link>
                </li>
            </About>
            <Tcc>
                <p>Trabalho de Conclusão de Curso - SENAI Cimatec</p>
                <p>Curso Técnico em Desenvolvimento de Sistemas</p>
            </Tcc>
            <Contact>
                <p>
                    <a href="https://github.com/TCC-CIMATEC" target="blank">
                        <span>
                            <img src={GithubImage} alt="Logo Github" />
                        </span>
                    Nosso projeto no Github!
                    </a>
                </p>
            </Contact>
        </WrapperFooter>
    );
}

export default Footer;