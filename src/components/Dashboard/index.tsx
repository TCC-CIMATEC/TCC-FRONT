// import CardVertical from "../../components/Card-vertical";
import SideMenu from "../SideMenu";
import { Container, Content } from "./styles";



const DashboardProfessor: React.FC = ({ children }) => {
    return (
        <Container className="container-dashboard">
            <SideMenu />
            <Content className="content-dashboard">
                {children}
            </Content>
        </Container>
    );
}

export default DashboardProfessor;