import styled from "styled-components"
import { navItems } from "./navItems.jsx"
import NavItem from "./NavItem"
import { theme } from "../../../../theme/index.js"
import { useNavigate } from "react-router"

export default function BodyMenu() {
  const navigate = useNavigate()
  return (
    <BodyMenuStyled>
      {navItems.map((navItem) => {
        return (
          <NavItem
            icon={navItem.icon}
            label={navItem.label}
            key={navItem.label}
            onClick={() => navigate(navItem.path)}
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
`
