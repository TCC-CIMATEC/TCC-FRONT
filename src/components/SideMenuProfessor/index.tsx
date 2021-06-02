import { Link } from "react-router-dom";
import { SideMenuData } from "./SideMenuData";
import { NavMenu, NavLine, NavMenuItems, AvatarImg, NavLineItem, ContentText, ContentTitle } from "./styles";
import AvatarImage from "../../assets/avatar.png";

import { useAuth } from '../../hooks/AuthContext';
import Button from "../Button";

function SideMenuProfessor() {
  const { signOut, user } = useAuth();

  return (
    <>
      <NavMenu>
        <NavMenuItems>
          <AvatarImg src={AvatarImage} alt="Foto Avatar" />
          <NavLine className='no-border'>
            <ContentTitle>
              Olá {user.name}
              <p>Professor(a)</p>
            </ContentTitle>
          </NavLine>
          {SideMenuData.map((item, index) => {
            return (
              <NavLineItem key={index}>
                {item.title === 'Sair' ? (
                  <Button onClick={signOut} title={item.title} background="#1C7293" >
                    {item.icon}
                    <ContentText>{item.title}</ContentText>
                  </Button>
                ) : (
                  <Link to={item.path} >
                  {item.icon}
                  <ContentText>{item.title}</ContentText>
                </Link>
                )}
              </NavLineItem>
            )

          })}
        </NavMenuItems>
      </NavMenu>
    </>
  );
}

export default SideMenuProfessor;