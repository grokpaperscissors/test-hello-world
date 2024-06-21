import * as React from "react"
import styled from 'styled-components'
import { Link } from "gatsby"
import {FaBars} from "react-icons/fa"
import { menuData } from "../data/menuData"
import {Button} from "./button"

// navigation bar
const Header = () => {
  return (
    <Nav>
      <NavLink to="/">MUSICALLY</NavLink>
      <Bars />
      <NavMenu>
        {menuData.map((item, index) => (
          <NavLink to={item.link} key={index}>
            {item.title}
          </NavLink>
        ))}
      </NavMenu>
      <NavBtn>
        <Button primary="true" round="true" to="/trips">
          Donate
        </Button>
      </NavBtn>
      </Nav>
  )
}

export default Header

const Nav = styled.nav`
  // background: purple;
  background: transparent;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1300px)/2);
  z-index: 100;
  position: relative;
`
const NavLink = styled(Link)`
  color: white;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
`
const Bars = styled(FaBars)`
  display: none;
  color: #fff;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 20px;
    right: 20px;
    transform: translate(-100%, 75%)
    font-size: 1.8rem;
    cursor: pointer;
  }
`

const NavMenu = styled.div`
  display: flex;
  align-item: center;
  margin-right: 5px;
  font-size: 30px;

  @media screen and (max-width: 768px){
    display: none;
  }
`

const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px){
    display: none;
  }
`