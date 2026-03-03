import Logo from "../../../reusable/Logo.jsx"
import styled from "styled-components"
import BodyMenu from "./BodyMenu.jsx"
import BottomMenu from "./BottomMenu.jsx"
import { useState } from "react"
import ToggleButton from "./ToggleButton.jsx"

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false)
  const [hasToggled, setHasToggled] = useState(false)

  const toggleMenu = () => {
    setIsOpen((prev) => {
      !prev
        ? (document.body.style.overflow = "hidden")
        : (document.body.style.overflow = "auto")
      setHasToggled(true)
      return !prev
    })
  }
  let menuClass = ""
  if (hasToggled) {
    menuClass = isOpen ? "open" : "closed"
  }

  return (
    <>
      <ToggleButton
        onClick={() => toggleMenu()}
        isOpen={isOpen}
        className={menuClass}
      />
      <MenuStyled className={menuClass}>
        <Logo className={"logo"} />
        <BodyMenu onClick={() => toggleMenu()} />
        <BottomMenu />
      </MenuStyled>
    </>
  )
}

const MenuStyled = styled.aside`
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

  @media screen and (max-width: 768px) {
    min-width: 100%;
    position: fixed;
    transform: translateX(-100%);
    opacity: 0;
    &.open {
      animation: fade 0.2s ease forwards;
      display: flex;
    }
    &.closed {
      animation: fade-out 0.2s ease forwards;
    }
    @keyframes fade {
      from {
        transform: translateX(-100%);
        opacity: 0;
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }
    @keyframes fade-out {
      from {
        transform: translateX(0);
        opacity: 1;
      }
      to {
        transform: translateX(-100%);
        opacity: 0;
      }
    }
  }
`
