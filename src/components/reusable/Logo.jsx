import { FaHeart } from "react-icons/fa"
import styled from "styled-components"
import { theme } from "../../theme"
import { toastInfo } from "../../datas/toastmessages"
import { getRandom } from "../../utils/array"
import { sweetMessages } from "../../datas/sweetMessages"

export default function Logo({ menuHover, setIsHover }) {
  const handleLogoClick = () => {
    toastInfo(getRandom(sweetMessages))
  }
  return (
    <LogoStyled
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onClick={handleLogoClick}
    >
      <span className="text">APA </span>
      <span>
        <FaHeart className={menuHover ? "animate heart" : "heart"} />
      </span>
      <span className="text"> PEC</span>
      <hr />
    </LogoStyled>
  )
}

const LogoStyled = styled.div`
  text-align: center;
  font-family: "Inter", sans-serif;
  font-size: 1.8rem;
  margin-top: 1em;
  cursor: pointer;
  user-select: none;
  .text {
    color: #2c3e50;
    font-weight: 600;
    letter-spacing: 0.5px;
  }
  hr {
    background-color: ${theme.colors.primary};
    height: 1px;
    border: none;
    width: 80%;
  }
  .heart {
    color: ${theme.colors.primary};
    opacity: 0.7;
    font-size: 2rem;
    transform-origin: center;
    transition: all 0.3s ease;
    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    &.animate {
      animation: heartbeat 1.5s ease infinite;
      opacity: 1;
    }
  }
  @keyframes heartbeat {
    0%,
    100% {
      transform: scale(1);
    }
    10% {
      transform: scale(1.15);
    }
    20% {
      transform: scale(1);
    }
    30% {
      transform: scale(1.05);
    }
    40% {
      transform: scale(1);
    }
  }
`
