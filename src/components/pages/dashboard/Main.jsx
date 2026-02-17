import styled from "styled-components"
import { theme } from "../../../theme"
import { useState } from "react"
import { fakePro } from "../../../datas/fakePro"
import { fakePatients } from "../../../datas/fakePatients"
import { IoIosMan, IoIosWoman } from "react-icons/io"

export default function Main() {
  const [patients, setPatients] = useState(fakePatients)
  const [pro, setPro] = useState(fakePro)
  const isMan = (patient) => {
    return patient.sex === "man"
  }
  return (
    <MainStyled>
      <div className="info-pro">
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
      </div>
      <div className="main-background">
        <div className="subtitle">
          <span>PEC en cours</span>
          <button>Ajouter un patient</button>
        </div>
        <div className="patients-container">
          {patients.map((patient) => (
            <div className="patient" key={patient.id ?? patient.lastName}>
              <span className={`patient-icon ${isMan(patient) ? "man" : ""}`}>
                {isMan(patient) ? <IoIosMan /> : <IoIosWoman />}
              </span>
              <div className="patient-info">
                <span className="patient-name">{patient.firstName}</span>
                <span className="patient-name">{patient.lastName}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </MainStyled>
  )
}

const MainStyled = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  .info-pro {
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
  }

  .main-background {
    background-color: #f1f1f1;
    padding: 28px 32px;
    flex: 1;

    .subtitle {
      display: flex;
      justify-content: space-between;
      font-size: 1.5rem;
      font-weight: 600;
      color: #1e2a38;
      margin-bottom: 20px;
    }

    .patients-container {
      background-color: #fff;
      border-radius: 12px;
      box-shadow: 0 1px 6px rgba(0, 0, 0, 0.06);
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
      align-content: start;
      gap: 16px;
      padding: 24px;
      min-height: 71%;

      .patient {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        padding: 41px 12px 41px 12px;
        border-radius: 10px;
        border: 1.5px solid #e9ecf0;
        background: #fafafa;
        cursor: pointer;
        transition: transform 0.16s, box-shadow 0.16s, border-color 0.16s;

        &:hover {
          transform: translateY(-3px);
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.09);
          border-color: ${theme.colors.primary};
        }

        .patient-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 52px;
          height: 52px;
          border-radius: 50%;
          background-color: ${theme.colors.primary}22;

          svg {
            font-size: 2.2rem;
            color: ${theme.colors.primary};
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
      }
    }
  }
`
