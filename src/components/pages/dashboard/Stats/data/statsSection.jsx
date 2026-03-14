import {
  FiActivity,
  FiAlertTriangle,
  FiArchive,
  FiTrendingDown,
  FiUser,
  FiUsers,
} from "react-icons/fi"
import {
  getActualPatients,
  getArchivedPatients,
  getAverageAge,
  getEarlyQuit,
  getOlder,
  getStagnantPatients,
  getTotalPatients,
  getYounger,
} from "../../helpers/stats"
import { BsGenderFemale, BsGenderMale } from "react-icons/bs"
import GraphPie from "../body/GraphPie"

export const SECTIONS = (patients) => [
  {
    title: "Démographie",
    cards: [
      {
        label: "Âge moyen des patients",
        value: `${getAverageAge(patients)} ans`,
        icon: <FiUser />,
        accent: "#4CAF50",
      },
      {
        label: "Patient le plus jeune",
        value: `${getYounger(patients)} ans`,
        icon: <FiUser />,
        accent: "#4CAF50",
      },
      {
        label: "Patient le plus âgé",
        value: `${getOlder(patients)} ans`,
        icon: <FiUser />,
        accent: "#64748b",
      },
      {
        label: "Répartitions Femme/Homme",
        chart: (
          <>
            <GraphPie patients={patients} />
          </>
        ),
        icon: (
          <>
            <BsGenderFemale /> <BsGenderMale />
          </>
        ),
        accent: "#64748b",
      },
    ],
  },
  {
    title: "Patientèle",
    cards: [
      {
        label: "Total patients",
        value: getTotalPatients(patients),
        icon: <FiUsers />,
        accent: "#4CAF50",
      },
      {
        label: "Prises en charge actives",
        value: getActualPatients(patients),
        icon: <FiActivity />,
        accent: "#4CAF50",
      },
      {
        label: "Prises en charge terminées",
        value: getArchivedPatients(patients),
        icon: <FiArchive />,
        accent: "#64748b",
      },
    ],
  },
  {
    title: "Alertes",
    cards: [
      {
        label: "Arrêts prématurés de la prise en charge",
        value: getEarlyQuit(patients).length,
        icon: <FiAlertTriangle />,
        accent: "#f59e0b",
      },
      {
        label: "Patients en stagnation/régression",
        value: getStagnantPatients(patients).length,
        icon: <FiTrendingDown />,
        accent: "#ef4444",
      },
    ],
  },
]
