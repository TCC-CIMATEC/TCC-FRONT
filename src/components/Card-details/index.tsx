import { ListTitle, CardTitle, CardV, Points } from "./styles";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";

import AvatarImage from "../../assets/avatar.png";
import { ButtonLight } from "../Button";

interface CardProps {
    img: string;
    student: string;
}

export function CardDetails({ img, student }: CardProps) {
    return (
        <CardV>
            <img src={img} alt={`Trilha ${student}`} />
            <legend>
                <CardTitle> {student} </CardTitle>
                <ListTitle>
                    <li>
                        <span><FaIcons.FaTrophy /></span>
                        1º Lugar
                    </li>
                    <li>
                        <span><AiIcons.AiOutlineCopyright /></span>
                        200 pts
                    </li>
                </ListTitle>
                <Points>
                    <h2>
                        <span><FaIcons.FaFlag /></span>
                        Pensamento Computacional
                    </h2>

                    <p>
                        <span><FaIcons.FaRegCheckCircle /></span>
                        12 acertos
                    </p>
                    <p>
                        <span><FaIcons.FaRegTimesCircle /></span>
                        8 erros
                    </p>
                </Points>

                <Points>
                    <h2>
                        <span><FaIcons.FaFlag /></span>
                        Lógica de Programação
                    </h2>

                    <p>
                        <span><FaIcons.FaRegCheckCircle /></span>
                        12 acertos
                    </p>
                    <p>
                        <span><FaIcons.FaRegTimesCircle /></span>
                        8 erros
                    </p>
                </Points>

                <div className="rowButton">
                    <ButtonLight title={"Excluir"} background={"#D7263D"} />
                    <ButtonLight title={"Ok"} background={"#659157"} />
                </div>
            </legend>
        </CardV>
    );
}

export default CardDetails;