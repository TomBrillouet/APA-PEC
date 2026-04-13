import { useContext } from "react"
import Popup from "../Popup.js"
import { MainContext } from "../../../../../../context/MainContext.js"
import HeaderPopup from "../HeaderPopup.js"
import BodyPro from "./BodyPro/BodyPro.js"

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
