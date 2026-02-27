import { useContext } from "react"
import Popup from "../Popup.jsx"
import { MainContext } from "../../../../../../context/MainContext.jsx"
import HeaderPopup from "../HeaderPopup.jsx"
import BodyPro from "./BodyPro/BodyPro.jsx"

export default function ProInfo() {
  const { toggleProInfo } = useContext(MainContext)
  return (
    <Popup>
      <HeaderPopup
        title={"Modifier les informations du professionnel"}
        onClick={toggleProInfo}
      />
      <BodyPro />
    </Popup>
  )
}
