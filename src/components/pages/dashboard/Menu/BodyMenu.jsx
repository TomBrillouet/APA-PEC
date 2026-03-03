import styled from "styled-components"
import { navItems } from "./navItems.jsx"
import NavItem from "./NavItem"

export default function BodyMenu({ onClick }) {
  return (
    <BodyMenuStyled>
      {navItems.map((navItem) => {
        return (
          <NavItem
            icon={navItem.icon}
            label={navItem.label}
            key={navItem.label}
            to={navItem.path}
            onClick={onClick}
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
