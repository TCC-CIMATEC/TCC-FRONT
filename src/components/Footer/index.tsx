import { WrapperFooter, About, Tcc, Contact } from "./styles";
import GithubImage from '../../img/github.svg';
function Footer() {
    return (
        <WrapperFooter>
            <About>
                <li><a href="#">Sobre o projeto</a></li>
                <li><a href="#">Contato</a></li>
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