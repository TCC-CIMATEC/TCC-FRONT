import { CardDescription, CardTitle, CardV } from "./styles";
import * as FaIcons from "react-icons/fa";
import {ButtonLight} from '../CardButton'

interface CardProps {
    img: string;
    title: string;
    description: string;
}

export function CardHorizontal({ img, title, description }: CardProps) {
    return (
        <CardV>
            <legend>
                <CardTitle> {title} </CardTitle>
                <CardDescription style={{ fontSize: "13px", margin: 0 }}>
                    <FaIcons.FaTrophy style={{ marginRight: "0.5vw" }} /> 1º lugar
                </CardDescription>
                <CardDescription> {description} </CardDescription>
                <ButtonLight title="Acessar" background="#659157" />
            </legend>
            <img src={img} alt={`Trilha ${title}`} />
        </CardV>
    );
}

export default CardHorizontal;