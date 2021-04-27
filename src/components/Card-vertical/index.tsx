import { CardDescription, CardTitle, CardV } from "./styles";

interface CardProps {
    img: string;
    title: string;
    description: string;
}

export function CardVertical({ img, title, description }: CardProps) {
    return (
        <CardV>
            <img src={img} alt={`Trilha ${title}`} />
            <legend>
                <CardTitle> {title} </CardTitle>
                <CardDescription> {description} </CardDescription>
            </legend>
        </CardV>
    );
}

export default CardVertical;