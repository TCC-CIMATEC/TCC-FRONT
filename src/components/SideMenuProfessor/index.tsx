import { Link } from "react-router-dom";
import { SideMenuData } from "./SideMenuData";
import { NavMenu, NavLine, NavMenuItems, AvatarImg, NavLineItem, ContentText, ContentTitle } from "./styles";
import AvatarImage from "../../assets/avatar.png";


function SideMenuProfessor() {

  return (
    <>
      <NavMenu>
        <NavMenuItems>
          <AvatarImg src={AvatarImage} alt="Foto Avatar" />
          <NavLine className='no-border'>
            <ContentTitle>
              Olá XXXXX
              <p>Professor(a)</p>
            </ContentTitle>
          </NavLine>
          {SideMenuData.map((item, index) => {
            return (
              <NavLineItem key={index}>
                <Link to={item.path} >
                  {item.icon}
                  <ContentText>{item.title}</ContentText>
                </Link>
              </NavLineItem>
            )

          })}
        </NavMenuItems>
      </NavMenu>
    </>
  );
}

export default SideMenuProfessor;