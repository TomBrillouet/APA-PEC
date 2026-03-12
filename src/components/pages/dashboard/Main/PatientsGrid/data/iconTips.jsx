import { FaCheck, FaQuestion } from "react-icons/fa"
import { FiTrendingDown } from "react-icons/fi"

export const iconTips = (isArchived, isEarlyQuit, isStagnant) => [
  {
    condition: isArchived && !isEarlyQuit,
    icon: <FaCheck />,
    className: "archived",
    label: "Prise en charge terminée",
  },
  {
    condition: isEarlyQuit,
    icon: <FaQuestion />,
    className: "exit",
    label: "Prise en charge abandonné (absence de bilan final)",
  },
  {
    condition: isStagnant && !isArchived,
    icon: <FiTrendingDown />,
    className: "trend-down",
    label: "Patient en stagnation/régression",
  },
]
