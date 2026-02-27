import { useContext } from "react"
import styled from "styled-components"
import { theme } from "../../../../theme"
import { FaUserEdit } from "react-icons/fa"
import { MainContext } from "../../../../context/MainContext"

export default function Header({ print }) {
  const { toggleProInfo, pro } = useContext(MainContext)
  if (!pro) {
    return null
  }

  const handleClick = () => {
    toggleProInfo()
  }

  return (
    <HeaderStyled>
      <div className="pro-infos">
        <div className="pro-details">
          <div className="pro-name">
            {pro.firstName} {pro.lastName}
          </div>
          <b className="pro-job">{pro.job}</b>
          <div className="pro-meta">
            <span>{pro.mail}</span>
            <span>{pro.phone}</span>
            {pro.website && pro.society ? (
              <a href={pro.website} target="_blank">
                {pro.society}
              </a>
            ) : (
              <span>{pro.society}</span>
            )}
          </div>
        </div>
      </div>
      {!print && (
        <div className="pro-modification" onClick={handleClick}>
          <FaUserEdit />
        </div>
      )}
    </HeaderStyled>
  )
}

const HeaderStyled = styled.div`
  display: flex;
  align-items: center;
  background-color: ${theme.colors.white};
  padding: 18px 32px;
  justify-content: space-between;
  color: #111827;

  .pro-infos {
    display: flex;
    gap: 20px;

    img {
      height: 56px;
      width: 56px;
      border-radius: 50%;
      object-fit: cover;
      border: 2px solid rgba(255, 255, 255, 0.4);
      flex-shrink: 0;
    }

    .pro-details {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    .pro-name {
      font-size: 1rem;
      font-weight: 600;
    }

    .pro-job {
      font-size: 0.8rem;
      font-weight: 500;
      color: #111827ab;
      text-transform: uppercase;
      letter-spacing: 0.06em;
    }

    .pro-meta {
      display: flex;
      gap: 16px;
      margin-top: 2px;
      flex-wrap: wrap;

      span,
      a {
        font-size: 0.78rem;
        color: #11182782;
      }
      a:hover {
        color: ${theme.colors.primary};
      }
    }
  }
  .pro-modification {
    font-size: 30px;
    color: #6b7280;
    cursor: pointer;
    transition: ease 0.2s;
    &:hover {
      color: ${theme.colors.primary};
      transform: scale(0.95);
    }
  }
`
