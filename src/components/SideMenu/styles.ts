import styled from 'styled-components';

interface AvatarImageProps {
  alt: string;
  src: string;
}

interface LinkProps {
  to: string;
}

interface NavTextItemProps {
  key: number;
}


export const NavBar = styled.div`
  background-color: #1C7293;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

export const NavMenu = styled.nav`
  background-color: #1C7293;
  width: 335px;
  height: 100%;
  display: flex;
  justify-content: center;
  // position: fixed;
  top: 0;
  left: 0;
  // z-index: 9;

  a, svg{
    color: white;
    text-decoration: none;
    align-items: center;
  }
`;

export const NavLine = styled.li`
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 8px 0px 8px 16px;
  list-style-type: none;
  height: 50px;
  color: white;

  a{
    text-decoration: none;
    font-size: 18px;
    width: 95%;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0px 16px;
    border-radius: 4px;
    
  }
`;

export const NavLineItem = styled.li<NavTextItemProps>`
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 8px 0px 8px 16px;
  list-style-type: none;
  height: 50px;
  color: white;

  a{
    text-decoration: none;
    font-size: 14px;
    width: 95%;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0px 16px;
    border-radius: 4px;
    
  }
`;

export const NavMenuItems = styled.ul`
  width: 100%;

  li{
    border-top: 1px solid white;
    
  }

  .no-border{
    border-top: none;
  }
`;

export const AvatarImg = styled.img<AvatarImageProps>`
  width: 100%;
  height: 150px;
`;

export const ContentText = styled.span`
  font-size: 12px;
  margin:auto 12px;
  color: white;
`;

export const ContentTitle = styled.span`
  margin:auto;
  color: white;
  font-weigth: bold;
`;