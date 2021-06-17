import { CardDescription, CardTitle, CardV } from "./styles";

interface CardProps {
    img: string;
    title: string;
    description: string;
}

export function CardVertical({ img, title, description }: CardProps) {
    return (
        <CardV>
            <div className="gray">
                <img src={img} alt={`Trilha ${title}`} />
            </div>
            <legend>
                <CardTitle> {title} </CardTitle>
                <CardDescription> {description} </CardDescription>
            </legend>
        </CardV>
    );
}

export default CardVertical;