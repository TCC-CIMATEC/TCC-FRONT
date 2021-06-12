import * as FaIcons from "react-icons/fa";
import Button from "../../../components/Button";

import {
  Container,
  Contexto,
  Image,
  Link,
  Paragraph,
  SubTitle,
  Title,
  Light,
  Questions
}
  from './styles';

function Exercicio() {
  return (
    <Container>
      <Contexto>
        <Title>Atividade</Title>
        <SubTitle>Questão 01</SubTitle>

        <h3>
          Liquorice dessert cake ice cream gummi bears lemon drops croissant ice cream. Soufflé tootsie roll caramels jelly beans caramels cake. Marshmallow chupa chups cake marzipan croissant topping tiramisu cotton candy sweet roll. Icing croissant chocolate marshmallow chocolate. Halvah marshmallow chocolate bar danish.
        </h3>

        <Questions>
          <li className="blue">
            <Link>
              <span><FaIcons.FaCircle /></span>
              <p>Liquorice dessert cake ice cream gummi bears lemon drops croissant ice cream.</p>
            </Link>
          </li>

          <li className="green">
            <Link>
              <span><FaIcons.FaHeart /></span>
              <p>Liquorice dessert cake ice cream gummi bears lemon drops croissant ice cream.</p>
            </Link>
          </li>

          <li className="red">
            <Link>
              <span><FaIcons.FaMoon /></span>
              <p>Liquorice dessert cake ice cream gummi bears lemon drops croissant ice cream.</p>
            </Link>
          </li>

          <li className="dark-blue">
            <Link>
              <span><FaIcons.FaSquare /></span>
              <p>Liquorice dessert cake ice cream gummi bears lemon drops croissant ice cream.</p>
            </Link>
          </li>
        </Questions>
      </Contexto>

      <div className="btn-content">
        <Button title="Anterior" background="#D7263D" />
        <Button title="Próximo" background="#659157" />
      </div>
    </Container>
  );
}

export default Exercicio;
