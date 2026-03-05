export const tests = [
  {
    name: "Assis-debout",
    description: "Evaluer la forme des membres inférieurs",
    results: [
      { field: "FC initiale", chart: false, value: null },
      { field: "Sat initiale", chart: false, value: null },
      { field: "Répétitions", chart: true, value: null },
      { field: "FC post", chart: false, value: null },
      { field: "Sat post", chart: false, value: null },
      { field: "FC post +2min", chart: false, value: null },
      { field: "Sat post +2min", chart: false, value: null },
    ],
  },
  {
    name: "Test d'équilibre unipodal",
    description: "Evaluer la forme des membres inférieurs",
    results: [
      { field: "Durée gauche", chart: true, value: null },
      { field: "Durée droite", chart: true, value: null },
    ],
  },
]
