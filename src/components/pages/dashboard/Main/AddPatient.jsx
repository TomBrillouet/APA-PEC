import styled from "styled-components"
import { tests } from "../../../../datas/tests"
import Select from "react-select"
import { theme } from "../../../../theme"
import { useState } from "react"
import { EMPTY_PATIENT } from "../../../../enums/patient.jsx"

export default function AddPatient({ addNewPatient, onClose }) {
  const [inputsValue, setInputsValue] = useState(EMPTY_PATIENT)

  const testOptions = tests.map((test) => ({
    value: test.name,
    label: test.name,
  }))

  const handleSubmit = (e) => {
    e.preventDefault()
    const newpatient = { ...inputsValue, id: crypto.randomUUID() }
    addNewPatient(newpatient)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setInputsValue((prev) => ({
      ...prev,
      [name]: value,
      adress: {
        ...prev.adress,
        [name]: value,
      },
    }))
  }

  return (
    <AddPatientStyled>
      <div className="header-add">
        <h2>Nouveau patient</h2>
        <span className="close" onClick={onClose}>
          X
        </span>
      </div>

      <form action="submit" onSubmit={handleSubmit}>
        <section>
          <h3>Identité</h3>
          <div className="grid">
            <div className="field">
              <label>Sexe</label>
              <Select
                required
                name="sex"
                options={[
                  { value: "man", label: "Homme" },
                  { value: "woman", label: "Femme" },
                ]}
                classNamePrefix="select"
                onChange={(selectedOption) =>
                  setInputsValue((prev) => ({
                    ...prev,
                    sex: selectedOption.value,
                  }))
                }
              />
            </div>
            <div className="field">
              <label>Nom</label>
              <input
                type="text"
                name="lastName"
                onChange={handleChange}
                required
              />
            </div>
            <div className="field">
              <label>Prénom</label>
              <input
                type="text"
                name="firstName"
                onChange={handleChange}
                required
              />
            </div>
            <div className="field">
              <label>Date de naissance</label>
              <input
                type="date"
                name="birth"
                onChange={handleChange}
                required
              />
            </div>
            <div className="field">
              <label>Taille</label>
              <input
                type="number"
                name="height"
                onChange={handleChange}
                placeholder="cm"
              />
            </div>
            <div className="field">
              <label>Poids</label>
              <input
                type="number"
                name="weight"
                onChange={handleChange}
                placeholder="kg"
              />
            </div>
          </div>
        </section>

        <section>
          <h3>Contact</h3>
          <div className="grid">
            <div className="field">
              <label>Mail</label>
              <input type="email" name="mail" onChange={handleChange} />
            </div>
            <div className="field">
              <label>Téléphone</label>
              <input type="tel" name="phone" onChange={handleChange} required />
            </div>
            <div className="field full">
              <label>Numéro et rue</label>
              <input type="text" name="street" onChange={handleChange} />
            </div>
            <div className="field">
              <label>Ville</label>
              <input type="text" name="city" onChange={handleChange} />
            </div>
            <div className="field">
              <label>Code postal</label>
              <input type="number" name="cp" onChange={handleChange} />
            </div>
          </div>
        </section>

        <section>
          <h3>Informations médicales</h3>
          <div className="grid">
            <div className="field full">
              <label>Problèmes</label>
              <textarea name="problems" rows={3} onChange={handleChange} />
            </div>
            <div className="field full">
              <label>Antécédents</label>
              <textarea name="history" rows={3} onChange={handleChange} />
            </div>
            <div className="field full">
              <label>Objectifs</label>
              <textarea name="goals" rows={3} onChange={handleChange} />
            </div>
          </div>
        </section>

        <section>
          <h3>Tests assignés</h3>
          <div className="grid">
            <div className="field full">
              <label>Tests</label>
              <Select
                isMulti
                name="tests"
                options={testOptions}
                classNamePrefix="select"
                placeholder="Sélectionner des tests…"
                onChange={(selectedOptions) => {
                  const values = selectedOptions.map((option) => option.value)

                  setInputsValue((prev) => ({
                    ...prev,
                    tests: values,
                  }))
                }}
                styles={{
                  menuList: (base) => ({
                    ...base,
                    maxHeight: "200px",
                    overflowY: "auto",
                  }),
                }}
              />
            </div>
          </div>
        </section>

        <div className="actions">
          <button type="button" className="btn-cancel" onClick={onClose}>
            Annuler
          </button>
          <button type="submit" className="btn-submit">
            Enregistrer
          </button>
        </div>
      </form>
    </AddPatientStyled>
  )
}

const AddPatientStyled = styled.div`
  position: absolute;
  top: 10%;
  max-height: 80%;
  left: 25%;
  width: 60vw;
  background-color: aliceblue;
  z-index: 2;
  border-radius: 10px;
  box-shadow: 0 8px 32px rgba(100, 149, 200, 0.18);
  overflow-y: scroll;

  .header-add {
    border-bottom: 2px solid #cce0f5;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 22px 28px 18px;

    h2 {
      margin: 0;
      font-size: 20px;
      font-weight: 700;
      color: #1a3a5c;
      letter-spacing: 0.01em;
    }
    span {
      font-weight: bold;
      transition: transform ease 0.2s;

      &:hover {
        cursor: pointer;
        transform: scale(0.9);
        color: ${theme.colors.primary};
      }
    }
  }

  form {
    padding: 8px 28px 28px;
    display: flex;
    flex-direction: column;
    gap: 4px;

    section {
      padding: 16px 0 8px;
      border-bottom: 1px solid #cce0f5;

      &:last-of-type {
        border-bottom: none;
      }

      h3 {
        margin: 0 0 14px;
        font-size: 11px;
        font-weight: 700;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        color: #4a90c4;
      }

      .grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 12px 20px;
      }
    }

    .field {
      display: flex;
      flex-direction: column;
      gap: 5px;

      &.full {
        grid-column: 1 / -1;
      }

      label {
        font-size: 12px;
        font-weight: 600;
        color: #2c5282;
        letter-spacing: 0.02em;
      }

      input,
      textarea {
        padding: 8px 11px;
        border: 1.5px solid #b8d8f0;
        border-radius: 6px;
        background: #fff;
        font-size: 13.5px;
        color: #1a3a5c;
        outline: none;
        font-family: inherit;
        box-sizing: border-box;
        width: 100%;
        transition: border-color 0.15s, box-shadow 0.15s;

        &::placeholder {
          color: #a0bcd4;
        }

        &:focus {
          border-color: #4a90c4;
          box-shadow: 0 0 0 3px rgba(74, 144, 196, 0.15);
        }
      }

      textarea {
        resize: vertical;
        line-height: 1.5;
      }

      .select__control {
        border: 1.5px solid #b8d8f0;
        border-radius: 6px;
        background: #fff;
        font-size: 13.5px;
        min-height: 38px;
        box-shadow: none;
        transition: border-color 0.15s, box-shadow 0.15s;

        &:hover {
          border-color: #4a90c4;
        }
        &--is-focused {
          border-color: #4a90c4;
          box-shadow: 0 0 0 3px rgba(74, 144, 196, 0.15);
        }
      }

      .select__placeholder {
        color: #a0bcd4;
      }
      .select__single-value {
        color: #1a3a5c;
      }

      .select__option {
        font-size: 13.5px;
        &--is-focused {
          background: #e8f2fb;
          color: #1a3a5c;
        }
        &--is-selected {
          background: #4a90c4;
          color: #fff;
        }
      }

      .select__multi-value {
        background: #daedf9;
        border-radius: 4px;
        &__label {
          color: #1a3a5c;
          font-size: 12.5px;
        }
        &__remove:hover {
          background: #b8d8f0;
          color: #1a3a5c;
        }
      }

      .select__menu {
        border-radius: 6px;
        box-shadow: 0 6px 20px rgba(100, 149, 200, 0.2);
        overflow: hidden;
      }
    }

    .actions {
      display: flex;
      justify-content: flex-end;
      gap: 10px;
      padding-top: 16px;

      button {
        padding: 9px 22px;
        font-size: 13.5px;
        font-weight: 600;
        border-radius: 6px;
        cursor: pointer;
        border: none;
        font-family: inherit;
        transition: background 0.15s, transform 0.1s;
      }

      .btn-cancel {
        background: transparent;
        border: 1.5px solid #b8d8f0;
        color: #4a90c4;
        &:hover {
          background: #daedf9;
        }
      }

      .btn-submit {
        background: #4a90c4;
        color: #fff;
        box-shadow: 0 3px 10px rgba(74, 144, 196, 0.3);
        &:hover {
          background: #2c6ea0;
          transform: translateY(-1px);
        }
        &:active {
          transform: translateY(0);
        }
      }
    }
  }
`
