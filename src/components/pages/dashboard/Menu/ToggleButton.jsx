import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md"
import styled from "styled-components"

export default function ToggleButton({ onClick, isOpen, className }) {
  return (
    <ToggleButtonStyled className={className} onClick={onClick}>
      {isOpen ? <MdKeyboardArrowLeft /> : <MdKeyboardArrowRight />}
    </ToggleButtonStyled>
  )
}
const ToggleButtonStyled = styled.div`
  background-color: white;
  display: flex;
  align-items: center;
  height: 35px;
  box-shadow: -5px 5px 5px rgba(1, 1, 1, 0.5);
  border-radius: 0 8px 8px 0;
  position: fixed;
  font-size: 30px;
  bottom: 20%;
  left: 0;
  z-index: 1;
  &.open {
    right: 0;
    border-radius: 8px 0 0 8px;
    box-shadow: 5px 5px 5px rgba(1, 1, 1, 0.5);
    animation: slide 0.2s ease forwards;
  }
  &.closed {
    left: 0;
    right: unset;
    animation: slide-out 0.2s ease forwards;
  }
  @keyframes slide {
    from {
      left: 0;
    }
    to {
      right: 0;
      left: unset;
    }
  }
  @keyframes slide-out {
    from {
      right: 0;
    }
    to {
      left: 0;
      right: unset;
    }
  }
  @media screen and (min-width: 768px) {
    display: none;
  }
`
