import styled from "styled-components"

export default function NavItem({ label, icon }) {
  return (
    <div className="nav-item">
      <span>{icon}</span>
      <span>{label}</span>
    </div>
  )
}

const NavItemStyled = styled.div``
