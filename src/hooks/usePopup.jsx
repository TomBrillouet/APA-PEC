import { useState } from "react"
import PatientOpened from "../components/pages/dashboard/Main/Popup/PatientOpened/PatientOpened"
import AddPatient from "../components/pages/dashboard/Main/Popup/AddPatient/AddPatient"
import ProInfo from "../components/pages/dashboard/Main/Popup/ProInfo/ProInfo"

export const usePopup = () => {
  const [patientOpen, setPatientOpen] = useState(false)
  const [addPatient, setAddPatient] = useState(false)
  const [isProOpen, setIsProOpen] = useState(false)
  const [isNewBilan, setIsNewBilan] = useState(false)
  const [isOldBilanOpened, setIsOldBilanOpened] = useState(false)

  const toggleProInfo = () => {
    setIsProOpen(!isProOpen)
  }

  const toggleAddPatient = () => {
    setAddPatient(!addPatient)
  }

  const togglePatient = () => {
    setPatientOpen(!patientOpen)
    setIsNewBilan(false)
    setIsOldBilanOpened(false)
  }
  const toggleNewBilan = () => {
    setIsNewBilan(!isNewBilan)
  }

  const toggleOldBilan = () => {
    setIsOldBilanOpened(!isOldBilanOpened)
  }

  const popupConfig = [
    {
      condition: addPatient,
      toggle: () => toggleAddPatient(),
      Content: <AddPatient />,
    },
    {
      condition: patientOpen,
      toggle: () => togglePatient(),
      Content: <PatientOpened />,
    },
    {
      condition: isProOpen,
      toggle: () => toggleProInfo(),
      Content: <ProInfo />,
    },
  ]

  return {
    popupConfig,
    toggleProInfo,
    togglePatient,
    toggleNewBilan,
    isNewBilan,
    isOldBilanOpened,
    toggleOldBilan,
    toggleAddPatient,
  }
}
