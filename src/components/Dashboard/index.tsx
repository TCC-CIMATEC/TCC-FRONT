// import CardVertical from "../../components/Card-vertical";
import Sidebar from "../Sidebar";
import { Container, Content, DashboardContent, DashboardWrapper, Lista, WrapperButton } from "./styles";

// import LockImg from '../../assets/lock.png';
// import Button from "../../components/Button";

// export function AlunoHome() {
//     return (
        // <div>
        //     <h1>Trilhas de estudo</h1>
        //     <DashboardContent>
        //         <CardVertical img={"https://picsum.photos/300/200"} title={"Pensamento Computacional"} description={"Aprenda sobre os quatro pilares do Pensamento Computacional, de Jeannete Wing"} />

        //         <CardVertical img={"https://picsum.photos/300/200"} title={"Pensamento Computacional"} description={"Aprenda sobre os quatro pilares do Pensamento Computacional, de Jeannete Wing"} />

        //         <CardVertical img={"https://picsum.photos/300/200"} title={"Pensamento Computacional"} description={"Aprenda sobre os quatro pilares do Pensamento Computacional, de Jeannete Wing"} />
        //     </DashboardContent>
        // </div>
//     );
// }

// interface ItemProps {
//     icon: string;
//     title: string;
// }

// export function Item({ icon, title }: ItemProps) {
//     return (
//         <li>
//             <span>
//                 <img src={icon} alt="" />
//             </span>
//             {title}
//             <span>
//                 <img src={LockImg} alt="Ícone bloqueado" />
//             </span>
//         </li>
//     );
// }

// export function AlunoTrilha() {
//     let item = [];
//     for (let i = 0; i < 9; i++) {
//         item.push(<Item icon={"https://picsum.photos/500"} title={"Módulo I - Variáveis"} />);
//     }
//     return (
//         <DashboardContent style={{ justifyContent: "center" }}>
//             <Lista>
//                 {item}
//             </Lista>
//             <WrapperButton>
//                 <Button title="Voltar" background="#D7263D" />
//                 <Button title="Continuar de onde parou" background="#659157" />
//             </WrapperButton>
//         </DashboardContent>
//     );
// }

const Dashboard: React.FC = ({ children }) => {
    return (
        <Container className="container-dashboard">
            <Sidebar />
            <Content className="content-dashboard">
                {children}
            </Content>
        </Container>
    );
}

export default Dashboard;