import { useState } from "react"
import styled from "styled-components"
import { fakePro } from "../../../../datas/fakePro"
import { theme } from "../../../../theme"

export default function Header() {
  const [pro, setPro] = useState(fakePro)

  return (
    <HeaderStyled>
      <img src={pro.image} alt={pro.firstName} />
      <div className="pro-details">
        <div className="pro-name">
          {pro.firstName} {pro.lastName}
        </div>
        <b className="pro-job">{pro.job}</b>
        <div className="pro-meta">
          <span>{pro.mail}</span>
          <span>{pro.phone}</span>
          <span>{pro.society}</span>
          <span>{pro.website}</span>
        </div>
      </div>
    </HeaderStyled>
  )
}

const HeaderStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  background-color: ${theme.colors.primary};
  padding: 18px 32px;

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
    color: #fff;
  }

  .pro-job {
    font-size: 0.8rem;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.75);
    text-transform: uppercase;
    letter-spacing: 0.06em;
  }

  .pro-meta {
    display: flex;
    gap: 16px;
    margin-top: 2px;
    flex-wrap: wrap;

    span {
      font-size: 0.78rem;
      color: rgba(255, 255, 255, 0.6);
    }
  }
`
