import React from "react"
import styled from "styled-components"
import logo from "../../images/logo.png"
import {Link} from "gatsby"
import {PrimaryColor, SecondaryColor, PrimaryBackground} from "./utils"

const NavBar = () => {
  return (
    <NavBarWrapper>
      <NavBarContainer>
        <LogoWrapper to={"/"}>
          <ImgWrapper src={logo} alt={"Achyutha Bharadwaj"}/>
        </LogoWrapper>
        <NavLinksWrapper className={"montserrat"}>
          <NavLink>
            Pages
          </NavLink>
          <NavLink>
            <Link to={"/"}>About</Link>
          </NavLink>
        </NavLinksWrapper>
      </NavBarContainer>
    </NavBarWrapper>
  )
}

const NavBarWrapper = styled.div`
  background: ${PrimaryBackground};
`

const NavBarContainer = styled.div`
  min-height: 80px;
  display: flex;
  width: 95%;
  margin: 0 auto;
`

const LogoWrapper = styled(Link)`
  display: flex;
  margin: auto 0;
`

const ImgWrapper = styled.img`
  transform: scale(0.6);
`

const NavLinksWrapper = styled.ol`
  list-style: none;
  display: flex;
  margin-left: auto;
`

const NavLink = styled.li`
  margin: auto 0 auto 45px;
  color: ${PrimaryColor};
  &:hover {
    color: ${SecondaryColor};
    cursor: pointer;
  }
  
  a {
    text-decoration: none;
    color: ${PrimaryColor};
    
    &:hover {
      color: ${SecondaryColor};
    }
  }
  
  span {
    font-size: 17px;
    color: ${SecondaryColor};
    padding-right: 7px;
  }
`

export default NavBar