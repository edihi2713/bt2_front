const dataCards = [
  {
    id: 0,
    name: "Aforo",
    iconName: "people_icon",
    path: "/aforo",
    options: [
      {
        id: 0,
        name: "Personas nuevas",
        iconName: "people_icon",
        path: "/new-people",
      },
      {
        id: 1,
        name: "Eventos",
        iconName: "people_icon",
        path: "/events-option",
        options: [
          {
            id: 0,
            name: "Verificar Asistencia",
            iconName: "people_icon",
            path: "/verify-asistents",
          },
          {
            id: 1,
            name: "Crear evento",
            iconName: "people_icon",
            path: "/create-events",
          },
        ],
      },
    ],
  },
];

export default dataCards;
