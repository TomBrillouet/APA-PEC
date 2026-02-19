export default function NavItem({ label, icon, onClick }) {
  return (
    <div className="nav-item" onClick={onClick}>
      <span>{icon}</span>
      <span>{label}</span>
    </div>
  )
}
