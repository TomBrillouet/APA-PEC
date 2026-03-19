import { AiOutlineFileDone } from "react-icons/ai"
import { IoMdHome } from "react-icons/io"
import { IoStatsChartOutline } from "react-icons/io5"
import { MdOutlineSettingsInputComposite } from "react-icons/md"
import { SlBookOpen } from "react-icons/sl"

export const navItems = [
  { label: "Mes patients", icon: <IoMdHome />, path: "/dashboard" },
  {
    label: "Anciens patients",
    icon: <AiOutlineFileDone />,
    path: "/dashboard/archived",
  },
  { label: "Statistiques", icon: <IoStatsChartOutline />, path: "/stats" },
  {
    label: "Configuration des tests",
    icon: <MdOutlineSettingsInputComposite />,
    path: "/tests",
    id: "tests",
  },
  { label: "Règles de suivi", icon: <SlBookOpen />, path: "/rules" },
]
