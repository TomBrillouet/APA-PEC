import { useNavigate } from "react-router"
import Button from "../../../reusable/Button"
import { signOut } from "firebase/auth"
import { auth } from "../../../../api/firebase-config"
import { MENU_LABELS } from "../../../../constants/labels/menu"

export default function BottomMenu() {
  const navigate = useNavigate()
  const logout = async () => {
    await signOut(auth)
    document.body.style.overflow = "auto"
    navigate("/login")
  }
  return <Button label={MENU_LABELS.logOut} onClick={logout} version="red" />
}
