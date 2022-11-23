import React from 'react'
import { NavbarContainer } from './Style'
import { NavbarWrapper } from './Style'
import { IconLogo } from './Style'
import { Menu } from './Style'
import { MenuItem } from './Style'
import { MenuItemLink } from './Style'
import { StyledButton } from './Style'
import { IconLogoMobile } from './Style'
import {FaBars} from 'react-icons/fa'; 
import {useState} from 'react'
import {FaTimes} from 'react-icons/fa';
import { NavDropdown } from 'react-bootstrap';
import { Fragment } from 'react-is/cjs/react-is.development'


export default function Navbar() {

  const [click, setClick] = useState(false); 
  const [isLogin, setIsLogin] = useState(false);

  const ChangeClick = () => {
    setClick(!click);
  }
  const handleLogin = () => setIsLogin(!isLogin);
  const handleLogout = () => setIsLogin(false);

  return (
    <>
    <NavbarContainer> 
      <NavbarWrapper>
          <IconLogo> <img src='./src/assets/logo.svg' width={140} alt="logo" /></IconLogo>
          <IconLogoMobile onClick={() => ChangeClick() }> 
          {
            click ? <FaTimes/> : <FaBars/>
          }
          </IconLogoMobile>    
          <Menu click={click} > 
            <MenuItem onClick={() => ChangeClick() }>
              <MenuItemLink to="/">Home</MenuItemLink>
            </MenuItem>
            <MenuItem onClick={() => ChangeClick() }>
              <MenuItemLink to="/ads">Anuncios</MenuItemLink>
            </MenuItem>
            <MenuItem onClick={() => ChangeClick() }>
              <MenuItemLink>Contáctanos</MenuItemLink>
            </MenuItem>
            {
              isLogin ?
              <>
                <MenuItem>
                  <NavDropdown title={
                    <span style={{marginRight: "10px"}}>Bienvenido(a) <img src='./src/assets/icon-user.svg' /></span>
                  } id="navbarScrollingDropdown">
                    <NavDropdown.Item href="#">Mi cuenta</NavDropdown.Item>
                    <NavDropdown.Item href="#!" onClick={() => handleLogout() }>Salir</NavDropdown.Item>
                  </NavDropdown>
                </MenuItem>
              </>
              :
              <>
                <MenuItem onClick={() => handleLogin() }>
                  <MenuItemLink>Ingresar</MenuItemLink>
                </MenuItem>
                <StyledButton>Registrarse</StyledButton>
              </>
            }
          </Menu>
      </NavbarWrapper>
    </NavbarContainer>
    </>
  )
}
