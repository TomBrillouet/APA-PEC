import styled from "styled-components"
import { theme } from "../../../../../theme"
import { NavLink } from "react-router"

export default function IconTip({ className, icon, label }) {
  return (
    <IconTipStyled onClick={(e) => e.stopPropagation()}>
      <span className={className}>{icon}</span>
      <span className="tooltiptext">
        {label} <br />
        <NavLink to={"/rules"} className={"more"}>
          En savoir plus
        </NavLink>
      </span>
    </IconTipStyled>
  )
}

const IconTipStyled = styled.div`
  position: relative;
  display: inline-block;
  pointer-events: auto;
  .archived {
    color: ${theme.colors.primary};
  }
  .exit {
    color: #f59e0b;
  }
  .trend-down {
    color: red;
  }
  .warning {
    color: #f59e0b;
  }

  .tooltiptext {
    visibility: hidden;
    width: 150px;
    font-size: 12px;
    white-space: pre-wrap;
    background-color: #000000a3;
    bottom: 25px;
    right: -60px;
    color: #ffffff;
    text-align: center;
    padding: 5px 15px;
    border-radius: 6px;
    position: absolute;
    z-index: 1;
    white-space: normal;
    cursor: initial;
    user-select: none;

    .more {
      color: white;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }

  &:hover .tooltiptext {
    visibility: visible;
  }
`
