import styled from "styled-components"
import { navItems } from "./navItems.js"
import NavItem from "./NavItem.js"

export default function BodyMenu({ onClick }: { onClick: () => void }) {
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
            id={navItem.id}
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
