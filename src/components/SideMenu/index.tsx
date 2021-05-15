import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SideMenuData } from "./SideMenuData";
import { NavMenu, NavLine, NavMenuItems, AvatarImg, NavLineItem, ContentText, ContentTitle } from "./styles";
import AvatarImage from "../../assets/avatar.png";


function SideMenu() {

  return (
    <>
      <NavMenu>
        <NavMenuItems>
          <AvatarImg src={AvatarImage} alt="Foto Avatar" />
          <NavLine className='no-border'>
            <ContentTitle>Olá XXXXX</ContentTitle>
          </NavLine>
          <NavLine>
            <div>
              <FaIcons.FaTrophy />
              <ContentText>1º</ContentText>
            </div>
            <div>
              <FaIcons.FaGraduationCap />
              <ContentText>Nivel 3</ContentText>
            </div>
            <div>
              <AiIcons.AiOutlineCopyright />
              <ContentText>200 pts</ContentText>
            </div>
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

export default SideMenu;