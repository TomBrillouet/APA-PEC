import { useContext } from "react"
import { MainContext } from "../../../../../../../context/MainContext"
import Button from "../../../../../../reusable/Button"

export default function FooterPatient() {
  const { toggleNewBilan } = useContext(MainContext)
  return (
    <div>
      <Button onClick={toggleNewBilan} label={"Faire un bilan"} />
    </div>
  )
}
