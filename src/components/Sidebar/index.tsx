import styled from "styled-components";
import { Link } from 'react-router-dom';

export const NavBar = styled.nav`
    background-color: #1C7293;
    width: 20%;
`;

function Sidebar() {
    return (
        <NavBar>
            <Link className="link" to="/turmas">
                <p>Turmas</p>
            </Link>
            <Link className="link" to="/aluno">
                <p>Trilhas</p>
            </Link>

        </NavBar>
    );
}

export default Sidebar;