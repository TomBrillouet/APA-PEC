import { NavLink } from "react-router"
import styled from "styled-components"
import { theme } from "../../../../theme"

export default function NavItem({ label, icon, to, onClick }) {
  return (
    <NavItemStyled>
      <NavLink
        onClick={onClick}
        className={({ isActive }) =>
          isActive ? "nav-item active" : "nav-item"
        }
        to={to}
        end
      >
        <span>{icon}</span>
        <span>{label}</span>
      </NavLink>
    </NavItemStyled>
  )
}

const NavItemStyled = styled.div`
  .nav-item {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 11px 14px;
    color: #747474;
    font-size: ${theme.fonts.size.P2};
    border-radius: ${theme.borderRadius.round};
    text-decoration: none;
    cursor: pointer;
    transition:
      background 0.18s,
      color 0.18s;

    span:first-child {
      display: flex;
      align-items: center;
      font-size: 1.1rem;
    }

    &:hover,
    &.active {
      background-color: ${theme.colors.primary};
      color: ${theme.colors.white};
    }
  }
`
