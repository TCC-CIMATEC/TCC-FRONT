import SideMenuProfessor from "../SideMenuProfessor";
import { Container, Content } from "./styles";



const DashboardProfessor: React.FC = ({ children }) => {
    return (
        <Container className="container-dashboard">
            <SideMenuProfessor />
            <Content className="content-dashboard">
                {children}
            </Content>
        </Container>
    );
}

export default DashboardProfessor;