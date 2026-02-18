import styled from "styled-components"
import HeaderAddPatient from "./Header/HeaderAddPatient"
import FormAddPatient from "./Form/FormAddPatient.jsx"

export default function AddPatient({ addNewPatient, onClose }) {
  //render
  return (
    <AddPatientStyled>
      <HeaderAddPatient onClose={onClose} />
      <FormAddPatient onClose={onClose} addNewPatient={addNewPatient} />
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
`
