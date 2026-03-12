import { AiOutlineFileDone } from "react-icons/ai"
import { IoMdHome } from "react-icons/io"
import { IoStatsChartOutline } from "react-icons/io5"
import { MdOutlineSettingsInputComposite } from "react-icons/md"

export const navItems = [
  { label: "Mes patients", icon: <IoMdHome />, path: "/dashboard" },
  {
    label: "Anciens patients",
    icon: <AiOutlineFileDone />,
    path: "/dashboard/archived",
  },
  {
    label: "Configuration des tests",
    icon: <MdOutlineSettingsInputComposite />,
    path: "/tests",
  },
  { label: "Statistiques", icon: <IoStatsChartOutline />, path: "/stats" },
]
