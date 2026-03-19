import styled from "styled-components"
import { theme } from "../../../../../theme"
import { IoIosMan, IoIosWoman } from "react-icons/io"
import IconTip from "./IconTip"
import { iconTips } from "./data/iconTips"

export default function PatientCard({
  id,
  isMan,
  firstName,
  lastName,
  onClick,
  flags,
}) {
  return (
    <PatientCardStyled key={id} onClick={onClick} className="patient-card">
      <div className="flag">
        {iconTips(flags)
          .filter((iconTip) => iconTip.condition)
          .map((iconTip, i) => {
            return (
              <IconTip
                className={iconTip.className}
                label={iconTip.label}
                icon={iconTip.icon}
                key={i}
              />
            )
          })}
      </div>
      <span className={`patient-icon ${isMan ? "man" : ""}`}>
        {isMan ? <IoIosMan /> : <IoIosWoman />}
      </span>
      <div className="patient-info">
        <span className="patient-name">{lastName}</span>
        <span className="patient-name">{firstName}</span>
      </div>
    </PatientCardStyled>
  )
}

const PatientCardStyled = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 41px 12px 41px 12px;
  border-radius: 10px;
  border: 1.5px solid #e9ecf0;
  background: ${theme.colors.white};
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.05);
  cursor: pointer;
  transition:
    transform 0.16s,
    box-shadow 0.16s,
    border-color 0.16s;

  &:hover:not(:has(.flag:hover)) {
    transform: translateY(-1.5px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.09);
    border-color: ${theme.colors.primary};
    z-index: 1;
  }

  .flag {
    position: absolute;
    display: flex;
    justify-content: space-between;
    width: 100%;
    top: 10px;
    font-size: 18px;
    color: black;
    border-radius: 8px;
    padding: 0 7px;
  }

  .patient-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 52px;
    height: 52px;
    border-radius: 50%;
    background-color: #c321212f;

    svg {
      font-size: 2.2rem;
      color: #c32121;
    }

    &.man {
      background-color: #bfdbfe;

      svg {
        color: #1d4ed8;
      }
    }
  }

  .patient-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2px;
  }

  .patient-name {
    font-size: 0.8rem;
    font-weight: 500;
    color: #1e2a38;
    text-align: center;
  }
`
