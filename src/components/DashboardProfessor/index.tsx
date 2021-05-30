// import CardVertical from "../../components/Card-vertical";
import SideMenu from "../SideMenu";
import { Container, Content} from "./styles";



const Dashboard: React.FC = ({ children }) => {
    return (
        <Container className="container-dashboard">
            <SideMenu />
            <Content className="content-dashboard">
                {children}
            </Content>
        </Container>
    );
}

export default Dashboard;