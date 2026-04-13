import Logo from "../../../reusable/Logo.js"
import styled from "styled-components"
import BodyMenu from "./BodyMenu.js"
import BottomMenu from "./BottomMenu.js"
import ToggleButton from "./ToggleButton.js"
import { Dispatch, SetStateAction } from "react"

type MenuType = {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
  hasToggled: boolean
  setHasToggled: Dispatch<SetStateAction<boolean>>
}

export default function Menu({
  isOpen,
  setIsOpen,
  hasToggled,
  setHasToggled,
}: MenuType) {
  const closeMenu = () => {
    setIsOpen(false)
    document.body.style.overflow = "auto"
  }

  let menuClass = ""
  if (hasToggled) {
    menuClass = isOpen ? "open" : "closed"
  }

  const toggleMenu = () => {
    setIsOpen((prev: boolean) => {
      !prev
        ? (document.body.style.overflow = "hidden")
        : (document.body.style.overflow = "auto")
      setHasToggled(true)
      return !prev
    })
  }

  return (
    <>
      <ToggleButton
        onClick={() => toggleMenu()}
        isOpen={isOpen}
        className={menuClass}
      />
      <MenuStyled className={menuClass}>
        <Logo />
        <BodyMenu onClick={() => closeMenu()} />
        <BottomMenu />
      </MenuStyled>
    </>
  )
}

const MenuStyled = styled.aside`
  width: 305px;
  display: flex;
  flex-direction: column;
  padding: 28px 16px;
  background-color: #fff;
  position: sticky;
  top: 0;
  gap: 5em;
  height: 95vh;
  margin: 15px;
  border-radius: 10px;
  top: 15px;

  .logo {
    white-space: nowrap;
    text-align: center;
    font-size: 1.6rem;
    margin-bottom: 40px;
    padding-bottom: 24px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    position: fixed;
    left: 0;
    top: 0;
    height: 100vh;
    height: -webkit-fill-available;
    height: 100dvh;
    overflow-y: auto;
    margin: 0;
    transform: translateX(-100%);
    opacity: 0;
    z-index: 1;

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
