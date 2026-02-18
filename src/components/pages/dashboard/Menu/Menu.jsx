import React from "react"
import Logo from "../../../reusable/Logo.jsx"
import styled from "styled-components"
import { theme } from "../../../../theme/index.js"
import { navItems } from "./navItems.jsx"
import NavItem from "./NavItem.jsx"

export default function Menu() {
  return (
    <MenuStyled>
      <Logo className={"logo"} />
      <nav>
        {navItems.map((navItem) => {
          return (
            <NavItem
              icon={navItem.icon}
              label={navItem.label}
              key={navItem.label}
            />
          )
        })}
      </nav>
    </MenuStyled>
  )
}

const MenuStyled = styled.aside`
  width: 14vw;
  min-width: 180px;
  display: flex;
  flex-direction: column;
  padding: 28px 16px;
  background-color: #252525;
  position: sticky;
  top: 0;

  .logo {
    white-space: nowrap;
    text-align: center;
    font-size: 1.6rem;
    margin-bottom: 40px;
    padding-bottom: 24px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  }

  nav {
    display: flex;
    flex-direction: column;
    gap: 4px;
    flex: 1;

    .nav-item {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 11px 14px;
      color: rgba(255, 255, 255, 0.5);
      font-size: ${theme.fonts.size.P2};
      border-radius: ${theme.borderRadius.round};
      cursor: pointer;
      transition: background 0.18s, color 0.18s;

      span:first-child {
        display: flex;
        align-items: center;
        font-size: 1.1rem;
      }

      &:hover,
      &.active {
        background-color: ${theme.colors.primary};
        color: #fff;
      }
    }
  }
`
