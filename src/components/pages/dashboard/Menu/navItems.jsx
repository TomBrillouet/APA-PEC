import { AiOutlineFileDone } from "react-icons/ai"
import { IoMdHome } from "react-icons/io"
import { IoStatsChartOutline } from "react-icons/io5"

export const navItems = [
  { label: "Accueil", icon: <IoMdHome />, path: "/dashboard" },
  {
    label: "PEC terminées",
    icon: <AiOutlineFileDone />,
    path: "/dashboard/archived",
  },
  { label: "Stats", icon: <IoStatsChartOutline />, path: "/stats" },
]
