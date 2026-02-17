import { useState } from "react"
import { fakePatients } from "../../../datas/fakePatients"
import { fakePro } from "../../../datas/fakePro"
import styled from "styled-components"
import Logo from "../../reusable/Logo"
import { theme } from "../../../theme"
import { IoIosMan, IoIosWoman, IoMdHome } from "react-icons/io"
import { AiOutlineFileDone } from "react-icons/ai"
import { IoStatsChartOutline } from "react-icons/io5"

export default function Dashboard() {
  const [patients, setPatients] = useState(fakePatients)
  const [pro, setPro] = useState(fakePro)

  const isMan = (patient) => {
    patient.sex === "man"
  }

  return (
    <DashboardStyled>
      <aside className="menu">
        <Logo className={"logo"} />
        <nav>
          <div className="nav-item">
            <span>
              <IoMdHome />
            </span>
            <span>Accueil</span>
          </div>
          <div className="nav-item">
            <span>
              <AiOutlineFileDone />
            </span>
            <span>PEC terminées</span>
          </div>
          <div className="nav-item">
            <span>
              <IoStatsChartOutline />
            </span>
            <span>Stats</span>
          </div>
        </nav>
      </aside>
      <main>
        <div className="info-pro">
          <img src={pro.image} alt={pro.firstName} />
          <span>Nom: {pro.lastName}</span>
          <span>Prénom: {pro.firstName}</span>
          <b>{pro.job}</b>
          <span>Mail: {pro.mail}</span>
          <span>Tél: {pro.phone}</span>
          <e>Nom Pro: {pro.society}</e>
          <span>Site: {pro.website}</span>
        </div>
        <div className="main-background">
          <span className="subtitle">PEC en cours</span>
          <div className="patients-container">
            {patients.map((patient) => {
              return (
                <div className="patient">
                  <span>{patient.lastName}</span>
                  <span>{patient.firstName}</span>
                  <span>{isMan(patient) ? <IoIosMan /> : <IoIosWoman />}</span>
                </div>
              )
            })}
          </div>
        </div>
      </main>
    </DashboardStyled>
  )
}

const DashboardStyled = styled.div`
  display: flex;
  .menu {
    height: 100vh;
    width: 12vw;
    display: flex;
    flex-direction: column;
    padding: 0 2vw;
    background-color: #252525;
    .logo {
      white-space: nowrap;
      text-align: center;
      font-size: 2rem;
      margin-top: 2vh;
    }
    nav {
      display: flex;
      flex-direction: column;
      justify-content: center;
      flex: 1;
      .nav-item {
        margin-bottom: 10px;
        color: white;
        padding: 10px 5px;
        display: flex;
        gap: 10px;
        font-size: ${theme.fonts.size.P2};
        border-radius: ${theme.borderRadius.round};
        &:hover {
          background-color: ${theme.colors.primary};
          cursor: pointer;
        }
      }
    }
  }
  main {
    height: 100vh;
    flex: 1;
    display: flex;
    flex-direction: column;
    .info-pro {
      height: 20vh;
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      background-color: ${theme.colors.primary};
      padding: 10px;
      img {
        height: 50px;
        width: 50px;
        border-radius: 50%;
      }
    }
    .main-background {
      background-color: #f1f1f1;
      padding: 20px;
      flex: 1;
      .subtitle {
        font-size: 2rem;
      }
      .patients-container {
        min-height: 86%;
        background-color: white;
        display: grid;
        grid-template-columns: repeat(8, 1fr);
        align-content: start;
        grid-gap: 20px;
        padding: 20px;
        .patient {
          display: flex;
          flex-direction: column;
          border: dashed red 1px;
          height: 25vh;
          svg {
            font-size: 7em;
            color: white;
          }
        }
      }
    }
  }
`
