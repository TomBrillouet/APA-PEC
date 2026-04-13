import { FaCheck, FaQuestion } from "react-icons/fa"
import { FiTrendingDown } from "react-icons/fi"
import { MdOutlineWarningAmber } from "react-icons/md"
import { PatientType } from "../../../../../../types"

type iconTipsType = {
  isArchived: boolean
  isEarlyQuit: PatientType | undefined
  isStagnant: PatientType | undefined
  isInactive: PatientType | undefined
}

export const iconTips = ({
  isArchived,
  isEarlyQuit,
  isStagnant,
  isInactive,
}: iconTipsType) => [
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
  {
    condition: isInactive && !isArchived && !isEarlyQuit,
    icon: <MdOutlineWarningAmber />,
    className: "warning",
    label: "Prévoir un bilan",
  },
]
