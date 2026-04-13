export const tourSteps = (openMenu: () => void) => [
  {
    element: ".pro-modification",
    popover: {
      title: "Modifier vos informations de praticien",
      description:
        "Ces infos seront visibles par les patients sur les bilans téléchargés.",
    },
  },
  {
    element: ".patient-card:first-child",
    popover: {
      title: "Ouvrir le dossier d'un patient",
      description:
        "C'est ici que vous pourrez modifier ses informations, gérer les bilans et les comptes rendus.",
    },
  },
  {
    element: ".flag:first-child span",
    popover: {
      title: "Alertes visuelles",
      description:
        "En un coup d'œil, sachez où en est la prise en charge de votre patient.",
    },
  },
  {
    element: "#tests",
    onHighlightStarted: () => {
      openMenu()
    },
    popover: {
      title: "Créez et gérez vos propres tests",
      description:
        "Vous pouvez créer, supprimer et modifier les tests, en paramétrant les résultats attendus, et si vous souhaitez avoir un graphique de présentation. Vous pourrez ensuite utiliser ces tests dans vos bilans.",
    },
  },
]
