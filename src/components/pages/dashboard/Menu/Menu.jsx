import Logo from "../../../reusable/Logo.jsx"
import styled from "styled-components"
import BodyMenu from "./BodyMenu.jsx"
import BottomMenu from "./BottomMenu.jsx"

export default function Menu() {
  return (
    <MenuStyled>
      <Logo className={"logo"} />
      <BodyMenu />
      <BottomMenu />
    </MenuStyled>
  )
}

const MenuStyled = styled.aside`
  width: 14vw;
  min-width: 180px;
  display: flex;
  flex-direction: column;
  padding: 28px 16px;
  background-color: #fff;
  position: sticky;
  top: 0;
  height: 100vh;

  .logo {
    white-space: nowrap;
    text-align: center;
    font-size: 1.6rem;
    margin-bottom: 40px;
    padding-bottom: 24px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  }
`
