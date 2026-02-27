import styled from "styled-components"
import { theme } from "../../../theme"
import { IoLockClosedOutline } from "react-icons/io5"
import { GoPerson } from "react-icons/go"
import { useNavigate } from "react-router"
import { useState } from "react"
import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth"
import { auth } from "../../../api/firebase-config"

export default function LoginForm() {
  const [logInputs, setLogInputs] = useState({
    username: "",
    password: "",
  })
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")

  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    setSuccess("")
    try {
      await signInWithEmailAndPassword(
        auth,
        logInputs.username,
        logInputs.password,
      )
      navigate("/dashboard")
    } catch (error) {
      switch (error.code) {
        case "auth/invalid-credential":
          setError("Identifiant ou mot de passe incorrect")
          break
        case "auth/too-many-requests":
          setError("Trop de tentatives, réessaie plus tard")
          break
        default:
          setError("Une erreur est survenue")
      }
    }
  }

  const handleForgotPassword = async (e) => {
    e.preventDefault()
    setError("")
    setSuccess("")
    if (!logInputs.username) {
      setError("Entrez votre email pour réinitialiser votre mot de passe")
      return
    }
    try {
      await sendPasswordResetEmail(auth, logInputs.username)
      setSuccess(
        "Si vous avez un compte, vous reçevrez un mail pour modifier votre mot de passe.",
      )
    } catch {
      setError("Aucun compte trouvé avec cet email.")
    }
  }
  return (
    <LoginFormStyled>
      <div className="form-header">
        <h2>Bienvenue !</h2>
        <p>Identifiez-vous pour accéder à votre espace</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="username">
            Identifiant <GoPerson />
          </label>
          <input
            id="username"
            type="text"
            autoComplete="username"
            value={logInputs.username}
            onChange={(e) =>
              setLogInputs({ ...logInputs, username: e.target.value })
            }
            placeholder="Entrez votre identifiant"
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="password">
            Mot de passe <IoLockClosedOutline />
          </label>
          <input
            id="password"
            autoComplete="curren-password"
            type="password"
            value={logInputs.password}
            onChange={(e) =>
              setLogInputs({ ...logInputs, password: e.target.value })
            }
            placeholder="Entrez votre mot de passe"
          />
        </div>

        <div className="form-options">
          <a onClick={handleForgotPassword} className="forgot-password">
            Mot de passe oublié ?
          </a>
        </div>
        <div className="error">{error}</div>
        <div className="success">{success}</div>

        <button type="submit" className="submit-btn">
          <span>Se connecter</span>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M4 10h12m0 0l-4-4m4 4l-4 4"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </form>
    </LoginFormStyled>
  )
}

const LoginFormStyled = styled.div`
  width: 100%;
  margin-top: 3rem;

  .form-header {
    margin-bottom: 2rem;

    h2 {
      font-size: 1.75rem;
      font-weight: 700;
      color: #1e293b;
      margin: 0 0 0.5rem 0;
    }

    p {
      color: ${theme.colors.text};
      font-size: 0.95rem;
      margin: 0;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    .input-group {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      label {
        font-size: 0.875rem;
        font-weight: 600;
        color: #334155;
        letter-spacing: 0.3px;
      }

      input[type="text"],
      input[type="password"] {
        padding: 0.875rem 1rem;
        border: 2px solid #e2e8f0;
        border-radius: 12px;
        font-size: 1rem;
        color: #1e293b;
        background: white;
        transition: all 0.2s ease;

        &::placeholder {
          color: #94a3b8;
        }

        &:focus {
          outline: none;
          border-color: ${theme.colors.primary};
          box-shadow: 0 0 0 4px ${theme.colors.primary}15;
          transform: translateY(-1px);
        }

        &:hover {
          border-color: #cbd5e1;
        }
      }
    }

    .form-options {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 0.875rem;
      margin-top: -0.5rem;

      .remember-me {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        cursor: pointer;
        color: #475569;

        input[type="checkbox"] {
          width: 18px;
          height: 18px;
          cursor: pointer;
          accent-color: ${theme.colors.primary};
        }

        span {
          user-select: none;
        }
      }

      .forgot-password {
        color: ${theme.colors.primary};
        text-decoration: none;
        font-weight: 600;
        transition: color 0.2s ease;

        &:hover {
          color: ${theme.colors.primary}dd;
          text-decoration: underline;
          cursor: pointer;
        }
      }
    }
    .error {
      color: red;
    }
    .success {
      color: blue;
    }

    .submit-btn {
      background: linear-gradient(
        135deg,
        ${theme.colors.primary} 0%,
        ${theme.colors.primary}dd 100%
      );
      color: white;
      border: none;
      padding: 1rem 1.5rem;
      border-radius: 12px;
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.75rem;
      transition: all 0.3s ease;
      box-shadow: 0 4px 15px ${theme.colors.primary}40;
      margin-top: 0.5rem;

      svg {
        transition: transform 0.3s ease;
      }

      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 20px ${theme.colors.primary}50;

        svg {
          transform: translateX(4px);
        }
      }

      &:active {
        transform: translateY(0);
      }
    }
  }
`
