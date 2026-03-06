import { useNavigate } from "react-router"
import Button from "../../../reusable/Button"
import { signOut } from "firebase/auth"
import { auth } from "../../../../api/firebase-config"

export default function BottomMenu() {
  const navigate = useNavigate()
  const logout = async () => {
    await signOut(auth)
    document.body.style.overflow = "auto"
    navigate("/login")
  }
  return <Button label={"Se déconnecter"} onClick={logout} version="red" />
}
