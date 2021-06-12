import { CardDescription, CardTitle, CardV } from "./styles";
import { ButtonLight } from "../CardButton";

interface CardProps {
    img: string;
    title: string;
    description: string;
}

export function CardHorizontalProfessor({ img, title, description }: CardProps) {
    return (
        <CardV>
            <legend>
                <CardTitle> {title} </CardTitle>
                <CardDescription> {description} </CardDescription>
                <div>
                    <ButtonLight title="Acessar" background="#659157" />
                </div>
            </legend>
            <img src={img} alt={`Trilha ${title}`} />
        </CardV>
    );
}

export default CardHorizontalProfessor;