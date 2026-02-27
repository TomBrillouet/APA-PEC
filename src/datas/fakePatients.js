export const fakePatients = [
  {
    id: "2",
    sex: "man",
    lastName: "Dubois",
    firstName: "Laurent",
    address: { cp: "67000", city: "Strasbourg", street: "8 rue du Moulin" },
    mail: "laurent.dubois@gmail.com",
    phone: "0611223344",
    birth: "1965-03-14",
    height: 175,
    weight: 80,
    problems: "Surpoids et déconditionnement à l'effort",
    history: "Hypertension traitée",
    goals: "Perte de poids et amélioration endurance",
    archived: false,
    bilans: [
      {
        id: "2-final",
        type: "final",
        height: 175,
        weight: 80,
        imc: 26.1,
        avis: "Perte de poids significative et amélioration cardio-respiratoire.",
        raisonFin: "Objectifs atteints",
        objectifsconclusion: "Poursuite activité autonome conseillée",
        date: "2026-04-15",
        tests: [
          {
            name: "Assis-debout",
            remarques: "Bonne endurance",
            results: [
              { field: "Répétitions", chart: true, value: "18" },
              { field: "FC initiale", value: "72" },
              { field: "FC finale", value: "95" },
              { field: "FC après délai", value: "78" },
              { field: "Sat initiale", value: "98" },
              { field: "Sat finale", value: "97" },
              { field: "Sat après délai", value: "98" },
            ],
          },
        ],
      },
      {
        id: "2-int",
        type: "intermediaire",
        height: 175,
        weight: 83,
        imc: 27.1,
        ajustement: "Augmentation durée cardio",
        evolution: "Capacité aérobie en hausse",
        ressenti: "Moins essoufflé",
        date: "2026-03-10",
        tests: [
          {
            name: "Assis-debout",
            remarques: "Amélioration",
            results: [
              { field: "Répétitions", chart: true, value: "14" },
              { field: "FC initiale", value: "75" },
              { field: "FC finale", value: "105" },
              { field: "FC après délai", value: "85" },
              { field: "Sat initiale", value: "98" },
              { field: "Sat finale", value: "96" },
              { field: "Sat après délai", value: "97" },
            ],
          },
        ],
      },
      {
        id: "2-init",
        type: "initial",
        height: 175,
        weight: 88,
        imc: 28.7,
        date: "2026-01-20",
        tests: [
          {
            name: "Assis-debout",
            remarques: "Essoufflement rapide",
            results: [
              { field: "Répétitions", chart: true, value: "9" },
              { field: "FC initiale", value: "80" },
              { field: "FC finale", value: "115" },
              { field: "FC après délai", value: "95" },
              { field: "Sat initiale", value: "97" },
              { field: "Sat finale", value: "95" },
              { field: "Sat après délai", value: "96" },
            ],
          },
        ],
      },
    ],
    logbook: [
      "hr",
      {
        content:
          "Séance de 45 min. Travail cardio sur vélo. Patient essoufflé mais motivé.",
        date: "20 janvier 2026",
      },
      "hr",
      {
        content:
          "Bonne séance, introduction des exercices assis-debout. 9 répétitions réalisées.",
        date: "3 février 2026",
      },
      "hr",
      {
        content:
          "Patient rapporte moins d'essoufflement au quotidien. Augmentation de la durée cardio.",
        date: "17 février 2026",
      },
      "hr",
      {
        content:
          "Séance axée renforcement membres inférieurs. Bonne tolérance à l'effort.",
        date: "3 mars 2026",
      },
    ],
  },

  {
    id: "3",
    sex: "woman",
    lastName: "Bernard",
    firstName: "Claire",
    address: { cp: "67200", city: "Strasbourg", street: "3 avenue de Colmar" },
    mail: "claire.bernard@yahoo.fr",
    phone: "0677889900",
    birth: "1988-11-02",
    height: 168,
    weight: 67,
    problems: "Rééducation post ligamentoplastie genou droit",
    history: "Rupture LCA 2025",
    goals: "Reprise course à pied",
    archived: false,
    bilans: [
      {
        id: "3-final",
        type: "final",
        height: 168,
        weight: 67,
        imc: 23.7,
        avis: "Stabilité retrouvée, reprise progressive de la course validée.",
        raisonFin: "Objectif fonctionnel atteint",
        objectifsconclusion: "Programme prévention rechute",
        date: "2026-04-12",
        tests: [
          {
            name: "Test d'équilibre unipodal",
            remarques: "Symétrie retrouvée",
            results: [
              { field: "Durée gauche", chart: true, value: "30" },
              { field: "Durée droite", chart: true, value: "29" },
              { field: "FC initiale", value: "65" },
              { field: "FC finale", value: "72" },
              { field: "FC après délai", value: "66" },
            ],
          },
        ],
      },
      {
        id: "3-int",
        type: "intermediaire",
        height: 168,
        weight: 68,
        imc: 24.1,
        ajustement: "Ajout pliométrie légère",
        evolution: "Stabilité en amélioration",
        ressenti: "Genou plus stable",
        date: "2026-03-01",
        tests: [
          {
            name: "Test d'équilibre unipodal",
            remarques: "Bonne progression",
            results: [
              { field: "Durée gauche", chart: true, value: "24" },
              { field: "Durée droite", chart: true, value: "22" },
              { field: "FC initiale", value: "67" },
              { field: "FC finale", value: "74" },
              { field: "FC après délai", value: "68" },
            ],
          },
        ],
      },
      {
        id: "3-init",
        type: "initial",
        height: 168,
        weight: 69,
        imc: 24.4,
        date: "2026-01-10",
        tests: [
          {
            name: "Test d'équilibre unipodal",
            remarques: "Instabilité marquée côté droit",
            results: [
              { field: "Durée gauche", chart: true, value: "18" },
              { field: "Durée droite", chart: true, value: "12" },
              { field: "FC initiale", value: "70" },
              { field: "FC finale", value: "78" },
              { field: "FC après délai", value: "72" },
            ],
          },
        ],
      },
    ],
    logbook: [
      "hr",
      {
        content:
          "Première séance de rééducation post-opératoire. Travail proprioception légère.",
        date: "15 janvier 2026",
      },
      "hr",
      {
        content:
          "Amélioration de la stabilité côté droit. Exercices unipodaux introduits.",
        date: "1 février 2026",
      },
      "hr",
      {
        content:
          "Patient rapporte une meilleure confiance dans l'appui droit. Ajout pliométrie légère.",
        date: "10 mars 2026",
      },
    ],
  },

  {
    id: "4",
    sex: "man",
    lastName: "Schmidt",
    firstName: "Julien",
    address: { cp: "67300", city: "Schiltigheim", street: "22 rue des Vignes" },
    mail: "julien.schmidt@orange.fr",
    phone: "0688997766",
    birth: "1995-06-18",
    height: 180,
    weight: 76,
    problems: "Douleurs épaules et posture",
    history: "Travail sédentaire",
    goals: "Renforcement dos et correction posture",
    archived: false,
    bilans: [
      {
        id: "4-final",
        type: "final",
        height: 180,
        weight: 76,
        imc: 23.5,
        avis: "Posture nettement améliorée, douleurs disparues.",
        raisonFin: "Disparition symptômes",
        objectifsconclusion: "Maintien renforcement 2x/semaine",
        date: "2026-04-18",
        tests: [
          {
            name: "Assis-debout",
            remarques: "Exécution fluide",
            results: [
              { field: "Répétitions", chart: true, value: "20" },
              { field: "FC initiale", value: "68" },
              { field: "FC finale", value: "88" },
              { field: "FC après délai", value: "70" },
            ],
          },
        ],
      },
      {
        id: "4-init",
        type: "initial",
        height: 180,
        weight: 79,
        imc: 24.4,
        date: "2026-01-12",
        tests: [
          {
            name: "Assis-debout",
            remarques: "Raideur dorsale",
            results: [
              { field: "Répétitions", chart: true, value: "12" },
              { field: "FC initiale", value: "72" },
              { field: "FC finale", value: "98" },
              { field: "FC après délai", value: "80" },
            ],
          },
        ],
      },
    ],
    logbook: [
      "hr",
      {
        content:
          "Bilan postural effectué. Raideur dorsale notable. Exercices de mobilité introduits.",
        date: "20 janvier 2026",
      },
      "hr",
      {
        content:
          "Séance renforcement dos et épaules. Patient signale moins de tensions en fin de journée.",
        date: "10 février 2026",
      },
      "hr",
      {
        content:
          "Correction posturale en nette progression. Douleurs épaules quasi absentes.",
        date: "15 mars 2026",
      },
    ],
  },
]
