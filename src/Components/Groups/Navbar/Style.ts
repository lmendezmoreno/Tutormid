import styled from 'styled-components';
import { colors } from '../../../Styles/colors'; 
import {Link} from 'react-router-dom';




 // aqui creamos la const con el element html y se le da estilos 
 // para luego usarla en la otra web. 

export const NavbarContainer = styled.div`
  width: 100%;
  height: 80%;
  position: sticky;
  top: 0;
  z-index: 99;
  border-bottom: 1px solid ${colors.lineColor};
  background:white;
  padding:20px 30px;
`

export const NavbarWrapper = styled.div`
  margin: auto;
  width: 100%;
  max-width: 1300px;
  height: 100%;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  `


export const IconLogo = styled(Link)`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  img{
    margin-top:-25px;
  }
  `


export const Menu = styled.ul`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 ;

  @media screen and (max-width: 960px){ 
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 60px;
    left: ${({ click }) => (click ? 0 : "-100%")};
    flex-direction: column;
    transition: 0.5s all ease-in;
    background: ${colors.bgLight};
    padding: 0 1rem;
    justify-content: flex-start;
  }
`

export const MenuItem = styled.li`
  height: 100%;
  padding: 0.5rem 1.5rem;
  display: flex;
  justify-content: end;
  align-items: center;
  font-size: 1.2rem;
  font-weight: 400;

  &:hover{ 
    background-color: ${colors.bgWhite} ;
    transition: 0.3s ease-in;
    color: ${colors.textColor}
  }

  @media screen and (max-width: 960px) { 
    width: 100%;
    height: 48px;
    padding: .5rem 0;
    justify-content: flex-start;
  }
`

export const MenuItemLink = styled(Link)`
  text-decoration: none;
  color: ${colors.textColor}; 
`

export const StyledButton = styled.button`
 border-radius: 4px;
 background: ${colors.primaryColor};
 padding: 5px 40px;
 color: #fff;
 border: 0 none;
 outline: none;
 cursor: pointer; 
 transition: all 0.2s ease-in-out;
 text-decoration: none;
 margin-right: 40px;
  
 &:hover { 
  transition:all 0.2s ease-in-out;
  background: #fff ;
  color: #010606 ;
 }

 @media screen and (max-width: 960px) {
  margin-right: auto;
 }

`

export const IconLogoMobile = styled.div`
  display: none;
  @media screen and (max-width: 960px) { 
    display: flex;
    color: ${colors.darkColor};
    font-size: 2rem;
  }
`


 








 



