import { NavLink } from "react-router"

export default function Stats() {
  return (
    <div>
      <span>Cette page verra bientôt le jour. En attendant: </span>
      <NavLink to={"/dashboard"}>Revenir en terrain connu.</NavLink>
    </div>
  )
}
