import styled from "styled-components"
import { navItems } from "./navItems.jsx"
import NavItem from "./NavItem"

export default function BodyMenu() {
  return (
    <BodyMenuStyled>
      {navItems.map((navItem) => {
        return (
          <NavItem
            icon={navItem.icon}
            label={navItem.label}
            key={navItem.label}
            to={navItem.path}
          />
        )
      })}
    </BodyMenuStyled>
  )
}

const BodyMenuStyled = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
`
