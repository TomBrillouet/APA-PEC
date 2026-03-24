import styled from "styled-components"
import { theme } from "../../../theme"
import { useNavigate } from "react-router"
import { useState } from "react"
import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth"
import { auth } from "../../../api/firebase-config"
import Input from "../../reusable/Input"
import { IoMdArrowForward } from "react-icons/io"
import { inputsLogin } from "./config/inputsLogin"
import { LOGINPAGE_LABELS } from "../../../constants/labels/loginPage"

export default function LoginForm() {
  const [logInputs, setLogInputs] = useState({
    username: "demo@demo.fr",
    password: "@Demo123",
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
          setError(LOGINPAGE_LABELS.wrongIds)
          break
        case "auth/too-many-requests":
          setError(LOGINPAGE_LABELS.retryLater)
          break
        default:
          setError(LOGINPAGE_LABELS.error)
      }
    }
  }

  const handleForgotPassword = async (e) => {
    e.preventDefault()
    setError("")
    setSuccess("")
    if (!logInputs.username) {
      setError(LOGINPAGE_LABELS.emptyMail)
      return
    }
    try {
      await sendPasswordResetEmail(auth, logInputs.username)
      setSuccess(LOGINPAGE_LABELS.mailSend)
    } catch {
      setError(LOGINPAGE_LABELS.notFound)
    }
  }
  const handleChange = (e) => {
    setLogInputs({ ...logInputs, [e.target.name]: e.target.value })
  }
  return (
    <LoginFormStyled>
      <div className="form-header">
        <h2>{LOGINPAGE_LABELS.welcome}</h2>
        <p>{LOGINPAGE_LABELS.logYou}</p>
      </div>
      <form onSubmit={handleSubmit}>
        {inputsLogin.map(({ name, ...props }) => (
          <Input
            name={name}
            key={name}
            {...props}
            value={logInputs[name]}
            onChange={handleChange}
          />
        ))}
        <a onClick={handleForgotPassword} className="forgot-password">
          {LOGINPAGE_LABELS.forgotten}
        </a>
        {error && <div className="error">{error}</div>}
        {success && <div className="success">{success}</div>}
        <button type="submit" className="submit-btn">
          <span>{LOGINPAGE_LABELS.logIn}</span>
          <IoMdArrowForward className={"arrow"} />
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

    .error {
      color: red;
    }
    .success {
      color: blue;
    }

    .submit-btn {
      background-color: ${theme.colors.primary};
      color: white;
      border: none;
      padding: 1rem 1.5rem;
      border-radius: 12px;
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
      display: flex;
      justify-content: center;
      gap: 0.75rem;
      transition: all 0.3s ease;
      box-shadow: 0 4px 15px ${theme.colors.primary}40;

      .arrow {
        transition: transform 0.3s ease;
        font-size: 20px;
      }

      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 20px ${theme.colors.primary}50;

        .arrow {
          transform: translateX(4px);
        }
      }

      &:active {
        transform: translateY(0);
      }
    }
  }
`
