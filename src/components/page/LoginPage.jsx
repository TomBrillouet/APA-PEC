import styled from "styled-components"
import { theme } from "../../theme"
import { IoLockClosedOutline, IoPersonSharp } from "react-icons/io5"
import { MdOutlinePersonOutline } from "react-icons/md"
import { GoPerson } from "react-icons/go"

export default function LoginPage() {
  const handleSubmit = (e) => {
    e.preventDefault()
    // Logique de connexion
  }

  return (
    <LoginPageStyled>
      <aside>
        <div className="logo-container">
          <h1>
            APA<span>-</span>PEC
          </h1>
          <p className="tagline">Gestion et suivi personnalisé des patients</p>
        </div>

        <div className="login-form">
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
                type="password"
                placeholder="Entrez votre mot de passe"
              />
            </div>

            <div className="form-options">
              <label className="remember-me">
                <input type="checkbox" />
                <span>Se souvenir de moi</span>
              </label>
              <a href="#" className="forgot-password">
                Mot de passe oublié ?
              </a>
            </div>

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

          <div className="form-footer">
            <p>
              Pas encore de compte ? <a href="#">Contactez l'administrateur</a>
            </p>
          </div>
        </div>
      </aside>
    </LoginPageStyled>
  )
}

const LoginPageStyled = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  min-height: 100vh;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    background: url("/images/login-bg.webp"),
      linear-gradient(135deg, rgba(30, 29, 39, 0.7), rgba(30, 29, 39, 0.5));
    background-size: contain;
    background-blend-mode: darken;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 0;
  }

  aside {
    position: relative;
    z-index: 1;
    min-height: 100vh;
    width: 100%;
    max-width: 25vw;
    background: linear-gradient(165deg, #ffffff 0%, #f8f9fa 100%);
    padding: 0 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-shadow: ${theme.shadows.medium};
    gap: 3rem;
    box-shadow: -10px 0 50px rgba(0, 0, 0, 0.15);

    @media (max-width: 768px) {
      max-width: 100%;
    }

    .logo-container {
      h1 {
        font-size: 3.5rem;
        font-weight: 800;
        color: ${theme.colors.primary};
        margin: 0;
        letter-spacing: -2px;
        line-height: 1;

        span {
          opacity: 0.4;
        }

        @media (max-width: 768px) {
          font-size: 2.5rem;
        }
      }

      .tagline {
        color: #64748b;
        font-size: 0.95rem;
        margin-top: 0.5rem;
        font-weight: 500;
      }
    }

    .login-form {
      width: 100%;

      .form-header {
        margin-bottom: 2rem;

        h2 {
          font-size: 1.75rem;
          font-weight: 700;
          color: #1e293b;
          margin: 0 0 0.5rem 0;
        }

        p {
          color: #64748b;
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
            }
          }
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

      .form-footer {
        margin-top: 2rem;
        padding-top: 2rem;
        border-top: 1px solid #e2e8f0;
        text-align: center;

        p {
          font-size: 0.9rem;
          color: #64748b;
          margin: 0;

          a {
            color: ${theme.colors.primary};
            text-decoration: none;
            font-weight: 600;
            transition: color 0.2s ease;

            &:hover {
              color: ${theme.colors.primary}dd;
              text-decoration: underline;
            }
          }
        }
      }
    }
  }
`
