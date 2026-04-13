import { NavLink } from "react-router"

export default function ErrorPage() {
  return (
    <div>
      <span>Oups, cette page n'existe pas. </span>
      <NavLink to={"/dashboard"}>Revenir en terrain connu.</NavLink>
    </div>
  )
}
