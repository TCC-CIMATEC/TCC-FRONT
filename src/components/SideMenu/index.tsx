import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as CgIcons from "react-icons/cg";
import * as IoIcons from "react-icons/io";
import { 
  NavMenu, 
  NavLine, 
  TeacherText,
  NavMenuItems, 
  AvatarImg, 
  MenuItems,
  MenuButton,
  MenuText,
  ContentText, 
  ContentTitle 
} from "./styles";
import AvatarImage from "../../assets/avatar.png";
import { useAuth } from "../../hooks/AuthContext";
import { useEffect } from "react";
import api from "../../services/api";
import { useState } from "react";


function SideMenu() {
  const { user, signOut } = useAuth();
  const [nivel,setNivel] = useState(0);
  const [pontuacao,setPontuacao] = useState(0);

  useEffect(() =>{
    async function getPlayerInfos(){
      const response = await api.get(`/jogador/${user.id}`);

      const {nivel, pontuacao} = response.data;

      setNivel(nivel);
      setPontuacao(pontuacao);
    }
    getPlayerInfos();
  }, [])

  function handleClickToLogout(){
    signOut();
  }
  return (
    <>
      <NavMenu>
        <NavMenuItems>
          <AvatarImg src={AvatarImage} alt="Foto Avatar" />
          <NavLine className='no-border'>
            <ContentTitle>Olá, {user.first_name}</ContentTitle>
          </NavLine>
          {user.categoria === 'A' && (
            <NavLine>
            <div>
              <FaIcons.FaTrophy
                size={30}
              />
              <ContentText>1º lugar</ContentText>
            </div>
            <div>
              <FaIcons.FaGraduationCap
                size={30}
              />
              <ContentText>Nivel {nivel}</ContentText>
            </div>
            <div>
              <AiIcons.AiOutlineCopyright
                size={30}
              />
              <ContentText>{pontuacao} pts</ContentText>
            </div>
          </NavLine>
          )}
          {user.categoria === 'P' && (
            <TeacherText>Professor(a)</TeacherText>
          )}
          <MenuItems>
            <Link to="/">
              <MenuButton>
                  <AiIcons.AiFillHome
                    size={26}
                  />
                  <MenuText>Home</MenuText>
              </MenuButton>
            </Link>

            <Link to="/nova-turma-aluno">
              <MenuButton>
                <IoIcons.IoIosPeople
                  size={26}
                />
                <MenuText>Turmas</MenuText>
              </MenuButton>
            </Link>
            
            <Link to="/trilha">
              <MenuButton>
                <AiIcons.AiOutlineFlag
                  size={26}
                />
                <MenuText>Pensamento Computacional</MenuText>
              </MenuButton>
            </Link>

            <Link to="/trilha">
              <MenuButton>
                <AiIcons.AiOutlineFlag
                  size={26}
                />
                <MenuText>Lógica de Programação</MenuText>
              </MenuButton>
            </Link>

            <Link to="/professor">
              <MenuButton>
                <CgIcons.CgProfile
                  size={26}
                />
                <MenuText>Perfil</MenuText>
              </MenuButton>
            </Link>

            <MenuButton
              onClick={()=> handleClickToLogout()}
            >
              <IoIcons.IoMdExit
                size={26}
              />
              <MenuText>Sair</MenuText>
            </MenuButton>
          </MenuItems>

        </NavMenuItems>
      </NavMenu>
    </>
  );
}

export default SideMenu;