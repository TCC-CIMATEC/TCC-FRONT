import CardVertical from "../../components/Card-vertical";
import Container from "../Main/styles";
import { DashboardContent, DashboardWrapper, Lista, WrapperButton } from "./styles";
import SideMenu from "../../components/SideMenu"

import LockImg from '../../img/lock.png';
import  { ButtonDashBoard } from "../../components/Button";

export function AlunoHome() {
    return (
        <div>
            <h1>Trilhas de estudo</h1>
            <DashboardContent>
                <CardVertical img={"https://picsum.photos/300/200"} title={"Pensamento Computacional"} description={"Aprenda sobre os quatro pilares do Pensamento Computacional, de Jeannete Wing"} />

                <CardVertical img={"https://picsum.photos/300/200"} title={"Pensamento Computacional"} description={"Aprenda sobre os quatro pilares do Pensamento Computacional, de Jeannete Wing"} />

                <CardVertical img={"https://picsum.photos/300/200"} title={"Pensamento Computacional"} description={"Aprenda sobre os quatro pilares do Pensamento Computacional, de Jeannete Wing"} />
            </DashboardContent>
        </div>
    );
}

interface ItemProps {
    icon: string;
    title: string;
}

export function Item({ icon, title }: ItemProps) {
    return (
        <li>
            <span>
                <img src={icon} alt="" />
            </span>
            {title}
            <span>
                <img src={LockImg} alt="Ícone bloqueado" />
            </span>
        </li>
    );
}

export function AlunoTrilha() {
    let item = [];
    for (let i = 0; i < 9; i++) {
        item.push(<Item icon={"https://picsum.photos/500"} title={"Módulo I - Variáveis"} />);
    }
    return (
        <DashboardContent style={{ justifyContent: "center" }}>
            <Lista>
                {item}
            </Lista>
            <WrapperButton>
                <ButtonDashBoard title="Voltar" background="#D7263D" />
                <ButtonDashBoard title="Resumo" background="#659157" />
            </WrapperButton>
        </DashboardContent>
    );
}

export function Dashboard() {
    return (
        <Container style={{ width: "100%" }}>
            <SideMenu />
            <DashboardWrapper>
                <AlunoTrilha />
            </DashboardWrapper>
        </Container>
    );
}

export default Dashboard;