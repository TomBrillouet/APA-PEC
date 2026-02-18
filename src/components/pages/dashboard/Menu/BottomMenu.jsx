import { useNavigate } from "react-router"
import Button from "../../../reusable/Button"

export default function BottomMenu() {
  const navigate = useNavigate()
  return <Button label={"Se déconnecter"} onClick={() => navigate("/")} />
}
