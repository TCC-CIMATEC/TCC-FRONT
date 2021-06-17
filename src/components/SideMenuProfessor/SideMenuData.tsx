import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as CgIcons from "react-icons/cg";

export const SideMenuData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome/>,
        cName: 'nav-text'
    },
    {
        title: 'Turmas',
        path: '/',
        icon: <IoIcons.IoIosPeople/>,
        cName: 'nav-text'
    },
    {
        title: 'Pensamento Computacional',
        path: '/trilha-inicial',
        icon: <AiIcons.AiOutlineFlag/>,
        cName: 'nav-text'
    },
    {
        title: 'Lógica de Programação',
        path: '/trilha-inicial',
        icon: <AiIcons.AiOutlineFlag/>,
        cName: 'nav-text'
    },
    {
        title: 'Perfil',
        path: '/',
        icon: <CgIcons.CgProfile/>,
        cName: 'nav-text'
    },
    {
        title: 'Sair',
        path: '/login',
        icon: <IoIcons.IoMdExit/>,
        cName: 'nav-text'
    }
]