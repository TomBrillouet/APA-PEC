import { FaCheck, FaQuestion } from "react-icons/fa"
import { FiTrendingDown } from "react-icons/fi"
import { MdOutlineWarningAmber } from "react-icons/md"
import { theme } from "../../../../../theme"
import { periodMaxDays } from "../../../../../constants/config/rules"

export const INDICATORS = [
  {
    id: "stagnation",
    icon: <FiTrendingDown />,
    label: "Patient en stagnation/régression",
    subtitle: "Prévoir une adaptation de la prise en charge",
    description:
      "Ce patient présente une détérioration sur au moins un indicateur évalué lors de son dernier bilan.",
    rule: (
      <>
        Au moins un résultat de test est <strong>inférieur ou égal</strong> sur
        le dernier bilan par rapport à <strong>l'avant-dernier</strong>.
      </>
    ),
    colors: {
      primary: "red",
      secondary: "#bb0000",
      tertiary: "#730000",
    },
  },
  {
    id: "inactive",
    icon: <MdOutlineWarningAmber />,
    label: "Bilan en retard",
    subtitle: "Évaluation à planifier",
    description:
      "Un bilan de suivi périodique est dû pour ce patient. Aucun bilan n'a été réalisé dans le délai recommandé.",
    rule: (
      <>
        Dernier bilan enregistré il y a plus de{" "}
        <strong>{periodMaxDays / 30} mois</strong>.
      </>
    ),
    colors: {
      primary: "#f59e0b",
      secondary: "#c27f0b",
      tertiary: "#7c5108",
    },
  },
  {
    id: "earlyQuit",
    icon: <FaQuestion />,
    label: "Prise en charge abandonné",
    subtitle: "Relancer le patient et identifier les freins",
    description:
      "La prise en charge a été clôturée sans que le bilan final n'ait été effectué.",
    rule: (
      <>
        Statut de la prise en charge défini comme <strong>terminée</strong> et
        le <strong>dernier bilan enregistré</strong> n'est pas un{" "}
        <strong>bilan final</strong>.
      </>
    ),
    colors: {
      primary: "#f59e0b",
      secondary: "#c27f0b",
      tertiary: "#7c5108",
    },
  },
  {
    id: "archived",
    icon: <FaCheck />,
    label: "Prise en charge terminée",
    subtitle: "Patient archivé",
    description:
      "Le dossier du patient est archivé à l'issue d'un bilan final. Il reste consultable et peut être rouvert si le patient reprend une activité.",
    rule: (
      <>
        Prise en charge marquée comme terminée par le praticien, ou dernier
        bilan enregistré défini comme <strong>bilan final</strong>.
      </>
    ),
    colors: {
      primary: `${theme.colors.primary}`,
      secondary: "#3b883d",
      tertiary: "#255527",
    },
  },
]
