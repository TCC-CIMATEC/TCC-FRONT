import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { useState } from "react";
import {SideMenuData} from "./SideMenuData";
import './styles.css'
import AvatarImage from '../../img/avatar.png'


function SideMenu(){

  const [sidebar, setSideBar] = useState(false);

  const showSidebar = () => setSideBar(!sidebar);

  return (
    <>
      <div className='navBar'>
        <Link to='#' className='menu-bars'>
          <FaIcons.FaBars onClick={showSidebar}/>
        </Link>
      </div>
      <nav className={sidebar? 'nav-menu active' : 'nav-menu'}>
        <ul className='nav-menu-items'>
          <li class-name='navbar-toggle'>
            <Link to='#' className='menu-bars'>
              <AiIcons.AiOutlineClose onClick={showSidebar}/> 
            </Link>
          </li>
          <li class-name='navbar-toggle'>
              <img className='avatarImage' src={AvatarImage}  alt="Foto Avatar"/>
              <h3 className='nav-text'>Olá XXX</h3>
          </li>
          <li class-name='navbar-toggle' className='nav-text'>
          <FaIcons.FaTrophy /> <span>1º Lugar</span>
          <FaIcons.FaGraduationCap/><span>  Nivel 3</span>
          <AiIcons.AiOutlineCopyright/><span>  200 pontos</span>
          </li>
          {SideMenuData.map((item,index)=>{
            return(
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            )
            
          })}
        </ul>
      </nav>
    </>
  );
}

export default SideMenu;